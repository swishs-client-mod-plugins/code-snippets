/* The below source code is licensed under MIT. */

import Manager from '@modules/Manager';
import Patcher from '@modules/Patcher';
import Webpack, { Filters } from '@modules/Webpack';

import { pjoin } from '@modules/Utilities';

import Editor from '@components/sections/Editor';
import TopBar from '@components/sections/TopBar';
import SideBar from '@components/sections/SideBar';
import InfoModal from '@components/modals/Information';

const [
  FormTitle,
  FormSection,
  ModalActions,
  StickerPicker,
  { keybind: keybindClass },
] = Webpack.bulk(
  Filters.byDisplayName('FormTitle'),
  Filters.byDisplayName('FormSection'),
  Filters.byProps('closeModal'),
  Filters.byDisplayName('StickerPickerLoader', true),
  Filters.byProps('closeButtonBold'),
);

const { Tooltip, Icon } = Webpack.components;

export default () => {
  const editorRef = React.useRef<any>();
  const unsavedState = React.useState(false);
  const collapsedState = React.useReducer(v => !v, false);
  const forceUpdate = React.useReducer(() => ({}), {})[1];
  const currentSnippetState = React.useState(Manager.getFirstSnippet());

  // This is a hack, changing the key of a React component remounts it.
  const [remountKey, remountMonaco] = React.useReducer(v => !v, false);

  // Shove it a ref so it's saved across rerenders.
  // Render has a failsafe so if the key isn't in snippets it will still render
  const lastSnippet = React.useRef('no snippets? :nobitches:');
  const setCurrentSnippet = (value: string) => {
    lastSnippet.current = currentSnippetState[0];
    currentSnippetState[1](value);
    unsavedState[1](false);
  };

  // Hide "ESC" text so the editor doesn't overlap it.
  React.useEffect(() => {
    const node = Manager.injectCSS(`
      .${keybindClass} { opacity: 0; }
    `, 'keybind-hide');

    return () => node.remove();
  });

  // Patch dogshit sticker keybind working even in SettingsView.
  React.useEffect(() => {
    if (typeof StickerPicker?.default !== 'function') return;
    return Patcher.after(StickerPicker, 'default', ([args]) => args.closePopout());
  }, []);

  type CurrentSnippetState = [string, React.Dispatch<React.SetStateAction<string>>, string];
  const currentSnippet: CurrentSnippetState = [currentSnippetState[0], setCurrentSnippet, lastSnippet.current];

  const states = {
    editorRef,
    forceUpdate,
    unsavedState,
    remountMonaco,
    currentSnippet,
    collapsedState,
  };

  // Set manager to update this component on file change.
  Manager.setUpdate(forceUpdate);

  return (
    <FormSection>
      <FormTitle className={pjoin(['header', 'title'])} tag='h1'>Code Snippets</FormTitle>
      <Tooltip className={pjoin(['header', 'icon', 'tooltip'])} text='Information Modal' position='top'>
        <div className={pjoin(['header', 'icon'])} onClick={() => ModalActions.openModal((event) => <InfoModal event={event} />)}>
          <Icon.Info height='16' width='16' />
        </div>
      </Tooltip>
      <div className={pjoin('container')}>
        <SideBar states={states} />
        <div className={pjoin(['editor', 'container'])}>
          <TopBar states={states} />
          <Editor states={states} key={Number(remountKey)} />
        </div>
      </div>
    </FormSection>
  );
};