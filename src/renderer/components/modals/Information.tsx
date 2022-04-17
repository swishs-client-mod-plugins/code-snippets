

/* The below code is licensed under MIT. */

import Manager from '@modules/Manager';
import Webpack, { Filters } from '@modules/Webpack';

import { cjoin } from '@modules/Utilities';

const simpleDedent = ([string]: TemplateStringsArray) =>
  string.split('\n').map((str) => str.trim()).join('\n');

const [
  Button,
  FormText,
  FormTitle,
  { AdvancedScrollerThin }
] = Webpack.bulk(
  Filters.byProps('DropdownSizes'),
  Filters.byDisplayName('FormText'),
  Filters.byDisplayName('FormTitle'),
  Filters.byProps('AdvancedScrollerThin'),
);

const makeCodeBlock = Webpack.getByProps('parse', 'parseTopic').defaultRules.codeBlock.react;

const { Modal } = Webpack.components;

const join = cjoin('modal-information');

export default ({ event }: { event: ModalEvent; }): JSX.Element => {
  return (
    <Modal.Root transitionState={event.transitionState} size={Modal.Sizes.LARGE}>
      <Modal.Header>
        <FormTitle tag='h3'>information Modal</FormTitle>
        <Modal.CloseButton onClick={event.onClose} />
      </Modal.Header>
      <div style={{ marginTop: '10px' }} />
      <Modal.Content>
        <AdvancedScrollerThin>
          <FormTitle tag='h2' >Information For Developers</FormTitle>
          <FormText type='description' style={{ paddingBottom: '6px' }}>
            All snippets are run asynchronously, in the global scope, and with four predefined variables:<br /><br />

            <div className={join('codeblock')}>
              {makeCodeBlock({
                content: simpleDedent`
                  let Logger  = window.cs.logger;
                  let Patcher = window.cs.patcher;
                  let Webpack = window.cs.webpack;
                  let Manager = window.cs.manager;
                `.trim(), lang: 'js'
              }, null, {})}
            </div><br />

            You can look at the source to find out how to use these or you can play with the Webpack and Patcher in the console by using the exposed "cs" variable.<br /><br />

            Of course if you don't want to use my patcher and/or webpack you can always redefine them like so:<br /><br />

            <div className={join('codeblock')}>{makeCodeBlock({ content: 'Webpack = window.unbound.webpack;', lang: 'js' }, null, {})}</div><br />

            Do note though that this requires the user to also have whatever plugin/package that defines said variable installed.
          </FormText>
          <FormTitle className={join(['pad', 'title'])}>Cleanup Functions</FormTitle>
          <FormText type='description' style={{ paddingBottom: '6px' }}>
            If a snippet returns a function it will be cached and will run on every snippet rerun or can be manually called with the cleanup button next to the rocket.<br /><br />

            If your snippet does anything that can be unpatched such as polluting global or patching a function please add one of these, not only does it make your life easier by unpatching subsequent reruns but it also lets the user unpatch it themself, they will also be run if the plugin unloaded.<br /><br />

            <div className={join('codeblock')}>{makeCodeBlock({ content: `return () => { unpatch(); Logger.info('How about you unpatch some bitches?'); };`, lang: 'js' }, null, {})}</div><br />

            If a type other than function is returned nothing will be cached and the return value will be displayed in console.
          </FormText>
        </AdvancedScrollerThin>
      </Modal.Content>
      <Modal.Footer>
        <Button
          onClick={() => Manager.backupSnippets()}
          size={Button.Sizes.LARGE}
          color={Button.Colors.GREEN}>
          Backup Snippets
        </Button>
        <Button
          onClick={event.onClose}
          look={Button.Looks.LINK}
          color={Button.Colors.TRANSPARENT}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal.Root>
  );
};