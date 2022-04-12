/* The below source code is licensed under MIT. */

import Manager from '@modules/Manager';
import Webpack, { Filters } from '@modules/Webpack';

import { cjoin, join } from '@modules/Utilities';

import SaveIcon from '@components/icons/Save';
import CleanIcon from '@components/icons/Clean';
import DeleteModal from '@components/modals/DeleteModal';

const pjoin = cjoin('topbar');

const [
  Switch,
  FormTitle,
  ButtonColors,
  ModalActions,
] = Webpack.bulk(
  Filters.byDisplayName('Switch'),
  Filters.byDisplayName('FormTitle'),
  Filters.byProps('dangerous', 'selected'),
  Filters.byProps('closeModal'),
);

const { Icon, Tooltip } = Webpack.components;
const { button, dangerous, disabled } = ButtonColors;

interface TopBarProps {
  states: {
    editorRef: React.MutableRefObject<any>;
    forceUpdate: React.DispatchWithoutAction;
    collapsedState: [boolean, React.DispatchWithoutAction];
    unsavedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    currentSnippet: [string, React.Dispatch<React.SetStateAction<string>>, string];
  };
}

export default ({ states }: TopBarProps) => {
  const editor = states.editorRef.current;

  const [collapsed] = states.collapsedState;
  const [unsaved, setUnsaved] = states.unsavedState;
  const [currentSnippet, setCurrentSnippet, lastSnippet] = states.currentSnippet;

  const scriptType = Manager.getScriptType(currentSnippet);
  const snippetEnabled = Manager.getSnippet(currentSnippet).enabled;
  return (
    <div className={pjoin('container', collapsed ? 'collapsed' : 'expanded')}>
      {/* Type abuse, ScriptType.JS is "0" */}
      {!Boolean(scriptType) ?
        <Tooltip position='top' text='Click me to run the code!'>
          <FormTitle
            tag='h3' className={pjoin('jstitle')}
            onClick={() => Manager.runSnippet(currentSnippet, scriptType)}>
            {currentSnippet}
          </FormTitle>
        </Tooltip> :
        <FormTitle tag='h3'>
          {currentSnippet}
        </FormTitle>}
      <div style={{ flex: 'auto' }} />
      {unsaved && !Boolean(scriptType) ?
        <Tooltip position='top' text='You can press CTRL + S!'>
          <div className={button} onClick={() => {
            const didError = Manager.updateSnippet(currentSnippet, { code: editor.getValue() });

            if (didError) return;
            Manager.makeToast(`Successfully saved snippet ${currentSnippet}!`, true);

            setUnsaved(false);
          }}>
            <SaveIcon />
          </div>
        </Tooltip> : null}
      {!Boolean(scriptType) && Manager.cleanups[currentSnippet] ?
        <Tooltip position='top' text={!Boolean(scriptType) ? 'Run Return Function' : 'Remove CSS'}>
          <div className={button} onClick={() => Manager.cleanups[currentSnippet]()}>
            <CleanIcon />
          </div>
        </Tooltip> : null}
      {!Boolean(scriptType) ||
        <div className={pjoin('switch')}>
          <Switch
            checked={snippetEnabled} className={pjoin('switch')}
            onChange={(value) => {
              const didError = Manager.updateSnippet(currentSnippet, { enabled: value });

              if (didError) return;

              if (!value) return Manager.cleanups[currentSnippet]?.();
              Manager.runSnippet(currentSnippet, Manager.ScriptType.CSS, true);
              Manager.makeToast(`Successfully saved and loaded snippet ${currentSnippet}!`, true);
            }}
          />
        </div>}
      {Boolean(scriptType) ||
        <Tooltip position='top' text={`${!snippetEnabled ? 'Turn on' : 'Turn off'} Run on Startup`}>
          <div className={`${button} ${!snippetEnabled ? join(disabled, pjoin('rocket')) : ''}`}
            onClick={() => Manager.updateSnippet(currentSnippet, { enabled: !snippetEnabled })}>
            <Icon.Rocket height='20' width='20' />
          </div>
        </Tooltip>}
      <div
        className={join(button, dangerous)}
        onClick={() => {
          ModalActions.openModal((event: ModalEvent) => {
            return <DeleteModal event={event} action={() => {
              Manager.deleteSnippet(currentSnippet);
              setCurrentSnippet(lastSnippet);
            }} />;
          });
        }}>
        <Icon.Trash height='20' width='20' />
      </div>
    </div >
  );
};