/* The below source code is licensed under MIT. */

import Webpack, { Filters } from '@modules/Webpack';

import { cjoin } from '@modules/Utilities';

const { Modal } = Webpack.components;
const [Text, Button] = Webpack.bulk(
  Filters.byDisplayName('Text'),
  Filters.byProps('DropdownSizes'),
);

interface DeleteModalProps {
  event: ModalEvent;
  action: Function;
}

const join = cjoin('modal-delete');

export default ({ event, action }: DeleteModalProps) => {
  return (
    <Modal.Root size={Modal.Sizes.SMALL} transitionState={event.transitionState}>
      <Modal.Content className={join('content')}>
        <Modal.CloseButton
          onClick={event.onClose}
          className={join('closebutton')} />
        <Text
          size={Text.Sizes.SIZE_24}
          className={join('title')}
          color={Text.Colors.HEADER_PRIMARY}>
          This action is irreversible.
        </Text>
        <Text
          size={Text.Sizes.SIZE_16}
          className={join('subtitle')}
          color={Text.Colors.HEADER_SECONDARY}>
          Only click the below button if you are absolutely sure.
        </Text>
      </Modal.Content>
      <Modal.Footer>
        <Button
          size={Button.Sizes.LARGE}
          color={Button.Colors.RED}
          className={join('button')}
          onClick={() => {
            action();
            event.onClose();
          }}>
          Delete it.
        </Button>
      </Modal.Footer>
    </Modal.Root>
  );
};