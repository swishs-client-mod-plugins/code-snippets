/* The below code is licensed under MIT. */

import Webpack, { Filters } from '@modules/Webpack';

interface UserInputProps {
  action: Function;
  event: ModalEvent;
  options?: {
    titleText?: string;
    headerText?: string;
    buttonText?: string;
    placeholder?: string,
    initialInput?: string,
    rejectFilter?: (input: string) => string | void;
  };
}

const [
  Button,
  FormItem,
  FormTitle,
  TextInput,
] = Webpack.bulk(
  Filters.byProps('DropdownSizes'),
  Filters.byDisplayName('FormItem'),
  Filters.byDisplayName('FormTitle'),
  Filters.byDisplayName('TextInput'),
);

const { Modal } = Webpack.components;

export default ({ event, action, options }: UserInputProps): JSX.Element => {
  const [input, _setInput] = React.useState(options?.initialInput || '');
  const [rejectMessage, setRejectMessage] = React.useState<string>(undefined);

  // shove state into an object so memoized funcs can read it
  const inputRef = React.useRef();
  const setInput = (data) => {
    inputRef.current = data;
    _setInput(data);
  };

  const runAction = () => {
    if (options?.rejectFilter) {
      const reject = options.rejectFilter(inputRef.current);
      if (reject) return setRejectMessage(reject);
    }

    action(inputRef.current);
    event.onClose();
  };

  const onEnter = (keyPressEvent: KeyboardEvent) => {
    keyPressEvent.key === 'Enter' && runAction();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onEnter);
    return () => document.removeEventListener('keydown', onEnter);
  }, []);

  return (
    <Modal.Root transitionState={event.transitionState} size={Modal.Sizes.SMALL}>
      <Modal.Header>
        <FormTitle tag='h3'>{options?.titleText || 'Input Modal'}</FormTitle>
        <Modal.CloseButton onClick={event.onClose} />
      </Modal.Header>
      <div style={{ marginTop: '10px' }} />
      <Modal.Content>
        <FormItem
          error={rejectMessage}
          title={options?.headerText || 'Input Text'} >
          <TextInput
            value={input}
            onChange={setInput}
            style={{ marginBottom: '10px' }}
            placeholder={options?.placeholder || 'rape LMAO'} />
        </FormItem>
      </Modal.Content>
      <Modal.Footer>
        <Button
          onClick={runAction}
          color={Button.Colors.GREEN}>
          {options?.buttonText || 'Submit'}
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