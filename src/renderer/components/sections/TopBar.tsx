/* The below source code is licensed under MIT. */

import Manager from '@modules/Manager';
import Webpack, { Filters } from '@modules/Webpack';

import { cjoin, join, sleep } from '@modules/Utilities';

import SaveIcon from '@components/icons/Save';
import CleanIcon from '@components/icons/Clean';
import InputModal from '@components/modals/InputModal';
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

export default ({ states }: { states: States; }) => {
  const editor = states.editorRef.current;

  const [collapsed] = states.collapsedState;
  const [unsaved, setUnsaved] = states.unsavedState;
  const [currentSnippet, setCurrentSnippet, lastSnippet] = states.currentSnippet;

  const snippet = Manager.getSnippet(currentSnippet);
  const scriptType = Manager.getScriptType(currentSnippet);
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
      {snippet.gist ? <Tooltip position='top' text='Pull snippet from Github'>
        <div
          className={button}
          onClick={async () => {
            const code = await Manager.pullGist(snippet.gist).catch((error) => {
              Manager.makeToast('Failed to pull snippet from Github!', false);
              Logger.error('Failed to pull snippet from Github!', error);
            });

            if (code) Manager.updateSnippet(currentSnippet, { code });

            // Refresh the textarea
            states.remountMonaco();
          }}>
          <Icon.Pull height='20' width='20' />
        </div></Tooltip> : <Tooltip position='top' text='Connect to Github Gist'>
        <div
          className={button}
          onClick={async () => {
            const id = await new Promise(resolve => {
              ModalActions.openModal((event: ModalEvent) => {
                return <InputModal event={event} action={(id: string) => {
                  resolve(id);
                }} options={{
                  buttonText: 'Save ID',
                  titleText: 'Github Gist ID',
                  headerText: 'Enter the ID of the gist you want to pull from',
                  placeholder: 'aec93e7d46e041e5c37f3d25bcbee20c',
                  rejectFilter: (input: string) => {
                    if (input.includes('gist.github.com')) return 'Insert the ID not the URL!';
                    if (!input.match(/^[0-9a-f]{32}$/)) return 'Invalid ID!';
                  }
                }} />;
              });
            });

            // wait one tick for modal to close.
            await sleep(4);

            ModalActions.openModal((event: ModalEvent) => {
              return <InputModal event={event} action={(name: string) => {
                Manager.updateSnippet(currentSnippet, { gist: { id, name } });
              }} options={{
                buttonText: 'Save Name',
                placeholder: 'Keyword Search.ts',
                titleText: 'Github Gist File Name (if it\'s blank it\'ll choose the first file)',
                headerText: 'Enter the name of file in the gist (or nothing if the gist only has one file)',
              }} />;
            });
          }}>
          <Icon.Link height='20' width='20' />
        </div>
      </Tooltip>}
      {!Boolean(scriptType) ||
        <div className={pjoin('switch')}>
          <Switch
            checked={snippet.enabled} className={pjoin('switch')}
            onChange={(value) => {
              const didError = Manager.updateSnippet(currentSnippet, { enabled: value });

              if (didError) return;

              if (!value) return Manager.cleanups[currentSnippet]?.();
              Manager.runSnippet(currentSnippet, Manager.ScriptType.CSS, true);
              Manager.makeToast(`Successfully saved and loaded snippet ${currentSnippet}!`, true);
            }}
          />
        </div>}
      {
        Boolean(scriptType) ||
        <Tooltip position='top' text={`${!snippet.enabled ? 'Turn on' : 'Turn off'} Run on Startup`}>
          <div className={`${button} ${!snippet.enabled ? join(disabled, pjoin('rocket')) : ''}`}
            onClick={() => Manager.updateSnippet(currentSnippet, { enabled: !snippet.enabled })}>
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