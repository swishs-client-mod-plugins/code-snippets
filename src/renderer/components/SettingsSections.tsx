/* The below source code is licensed under MIT. */

import Manager from '@modules/Manager';
import Patcher from '@modules/Patcher';
import Webpack, { Filters } from '@modules/Webpack';

import { pjoin } from '@modules/Utilities';

import Editor from '@components/sections/Editor';
import TopBar from '@components/sections/TopBar';
import SideBar from '@components/sections/SideBar';

const [
  FormTitle,
  FormSection,
  StickerPicker,
] = Webpack.bulk(
  Filters.byDisplayName('FormTitle'),
  Filters.byDisplayName('FormSection'),
  Filters.byDisplayName('StickerPickerLoader', true),
);

export default () => {
  const editorRef = React.useRef<any>();
  const unsavedState = React.useState(false);
  const collapsedState = React.useReducer(v => !v, false);
  const forceUpdate = React.useReducer(() => ({}), {})[1];
  const currentSnippetState = React.useState(Manager.getFirstSnippet());

  // Shove it a ref so it's saved across rerenders.
  // Render has a failsafe so if the key isn't in snippets it will still render
  const lastSnippet = React.useRef('no snippets? :nobitches:');
  const setCurrentSnippet = (value: string) => {
    lastSnippet.current = currentSnippetState[0];
    currentSnippetState[1](value);
    unsavedState[1](false);
  };

  // Patch dogshit sticker keybind working even in SettingsView.
  React.useEffect(() => {
    if (typeof StickerPicker?.default !== 'function') return;
    return Patcher.after(StickerPicker, 'default', ([args]) => args.closePopout());
  }, []);

  type CurrentSnippetState = [string, React.Dispatch<React.SetStateAction<string>>, string];
  const currentSnippet: CurrentSnippetState = [currentSnippetState[0], setCurrentSnippet, lastSnippet.current];

  const states = { currentSnippet, forceUpdate, collapsedState, unsavedState, editorRef };

  // Set manager to update this component on file change.
  Manager.setUpdate(forceUpdate);

  return (
    <FormSection>
      <FormTitle tag='h1'>
        Code Snippets
      </FormTitle>
      <div className={pjoin('container')}>
        <SideBar states={states} />
        <div className={pjoin(['editor', 'container'])}>
          <TopBar states={states} />
          <Editor states={states} />
        </div>
      </div>
    </FormSection>
  );
};