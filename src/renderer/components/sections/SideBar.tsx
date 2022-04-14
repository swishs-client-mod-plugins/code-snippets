/* The below source code is licensed under MIT. */

import Manager from '@modules/Manager';
import Webpack, { Filters } from '@modules/Webpack';

import { cjoin, extensions } from '@modules/Utilities';

import SnippetIcon from '@components/icons/Icon';
import InputModal from '@components/modals/InputModal';
import DeleteModal from '@components/modals/DeleteModal';
import ForEachOptimized from '@components/utility/ForEachOptimized';

const join = cjoin('sidebar');

const [
  FormTitle,
  DragHooks,
  ButtonColors,
  ModalActions,
  ContextMenuActions
] = Webpack.bulk(
  Filters.byDisplayName('FormTitle'),
  Filters.byProps('DropTarget', 'useDrop'),
  Filters.byProps('dangerous', 'selected'),
  Filters.byProps('closeModal'),
  Filters.byProps('openContextMenuLazy'),
);

const {
  Icon,
  Tooltip,
  ContextMenu,
  BarlessScroller,
} = Webpack.components;

interface TabItemProps {
  index: number;
  snippet: string;
  collapsed: boolean;
  forceUpdate: React.DispatchWithoutAction;
  draggingRef: React.MutableRefObject<boolean>;
  state: [string, React.Dispatch<React.SetStateAction<string>>, string];
}

interface TabItemContextMenuProps {
  snippet: string;
  forceUpdate: React.DispatchWithoutAction;
  event: React.MouseEvent<HTMLDivElement, MouseEvent>;
  state: [string, React.Dispatch<React.SetStateAction<string>>, string];
}

export default ({ states }: { states: States; }): JSX.Element => {
  const { LEFT, RIGHT } = Icon.Caret.Directions;
  const { button } = ButtonColors;

  // Shove it in an object so it can be read by memoized functions.
  // This is for the hover tooltip not to show while the item is being dragged.
  const draggingRef = React.useRef(false);
  const setDragging = (value: MouseEvent) => {
    draggingRef.current = value.type === 'mousedown';
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', setDragging);
    document.addEventListener('mouseup', setDragging);

    return () => {
      document.removeEventListener('mousedown', setDragging);
      document.removeEventListener('mouseup', setDragging);
    };
  }, []);

  const setCurrentSnippet = states.currentSnippet[1];
  const [collapsed, toggleCollapsed] = states.collapsedState;

  return (
    <div className={join('container', collapsed ? 'collapsed' : 'expanded')}>
      <div className={join('topbar')}>
        {collapsed ||
          <FormTitle tag='h3'>
            Snippets
          </FormTitle>}
        {collapsed ||
          <div
            className={button}
            onClick={() => {
              ModalActions.openModal((event: ModalEvent) => {
                return <InputModal event={event} action={(input: string) => {
                  const [name, extension] = input.split('.');
                  Manager.createSnippet(name, extension);
                  setCurrentSnippet(name);
                }} options={{
                  buttonText: 'Create Snippet',
                  placeholder: 'Block All Astra Users.ts',
                  headerText: 'psst you can use typescript and jsx!',
                  titleText: 'Create Snippet (include the extension)',
                  rejectFilter: (input: string) => {
                    if (Manager.getSnippets()[input.split('.')?.[0]])
                      return 'A snippet with that name is already saved!';
                    if (!extensions.some((ext) => input.toLowerCase().endsWith(`.${ext}`)))
                      return 'Must have a valid extension.';
                  }
                }} />;
              });
            }}>
            <Icon.Plus height='20' width='20' />
          </div>}
        <div className={button} onClick={toggleCollapsed}>
          <Icon.Caret height='20' width='20' direction={collapsed ? RIGHT : LEFT} />
        </div>
      </div>
      <div className={join('divider')} />
      <div className={join(['tab', 'list'])}>
        <BarlessScroller>
          <ForEachOptimized each={Object.keys(Manager.getSnippets())}>
            {(snippet, index) =>
              <TabItem
                index={index}
                snippet={snippet}
                collapsed={collapsed}
                draggingRef={draggingRef}
                state={states.currentSnippet}
                forceUpdate={states.forceUpdate} />}
          </ForEachOptimized>
        </BarlessScroller>
      </div>
    </div>
  );
};

const type = 'CODE_SNIPPETS_ITEM';
const { useDrag, useDrop } = DragHooks;
const TabItem = ({ snippet, state, index, forceUpdate, collapsed, draggingRef }: TabItemProps) => {
  const [{ dragIndex }, drop] = useDrop({
    accept: type,
    drop: () => ({ dropIndex: index }),
    collect: (monitor) => {
      const snippet = monitor.getItem();
      return snippet && monitor.isOver() ? {
        dragIndex: snippet.index
      } : { dragIndex: null };
    },
  });

  const drag = useDrag({
    type, item: { snippet, index },
    end: (_, monitor) => {
      const { dropIndex } = monitor.getDropResult();
      Manager.moveSnippet(snippet, dropIndex);
    }
  })[1];

  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  // Timer system for long hover
  let timer: NodeJS.Timeout;
  const mouseEnter = () => {
    timer = setTimeout(() => {
      if (!draggingRef.current)
        setTooltipVisible(true);
    }, 850);
  };

  const mouseLeave = () => {
    setTooltipVisible(false);
    clearTimeout(timer);
  };

  const [currentSnippet, setCurrentSnippet] = state;

  return (
    <Tooltip
      position='top'
      shouldShow={tooltipVisible}
      text={`${snippet}.${Manager.getSnippet(snippet).extension}`}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={(node) => drag(drop(node || null))}
        onClick={() => setCurrentSnippet(snippet)}
        onContextMenu={(event) =>
          TabItemContextMenu({
            event,
            state,
            snippet,
            forceUpdate
          })}
        className={join(
          ['tab', 'item'],
          dragIndex !== null && dragIndex !== index ? dragIndex > index
            ? ['tab', 'item', 'drag', 'below']
            : ['tab', 'item', 'drag', 'above'] : '',
          snippet === currentSnippet ? ['tab', 'item', 'selected'] : ''
        )}>
        <SnippetIcon extension={Manager.getSnippet(snippet).extension} />
        {collapsed || <div className={join(['tab', 'item', 'text'])}>{snippet}</div>}
      </div>
    </Tooltip>
  );
};

const TabItemContextMenu = ({ event, snippet, state, forceUpdate }: TabItemContextMenuProps) => {
  const [currentSnippet, setCurrentSnippet, lastSnippet] = state;

  ContextMenuActions.openContextMenu(event, () => (
    <ContextMenu.Container onClose={ContextMenuActions.closeContextMenu}>
      <ContextMenu.Item
        id='rename'
        label='Rename Snippet'
        action={() => {
          ModalActions.openModal((event: ModalEvent) => {
            return <InputModal event={event} action={(input: string) => {
              console.log(input, 'inpust');
              const [name, extension] = input.split('.');

              if (extension && extensions.includes(extension))
                Manager.updateSnippet(snippet, { extension });

              if (name !== snippet)
                Manager.renameSnippet(snippet, name);

              setCurrentSnippet(name);
            }} options={{
              initialInput: snippet,
              titleText: 'Rename Snippet',
              buttonText: 'Rename Snippet',
              placeholder: 'Cute Girl Getter.ts',
              headerText: 'By the way, you can change the extension!',
              rejectFilter: (input: string) => {
                const split = input.split('.');
                if (snippet !== split[0] && Manager.getSnippets()[split[0]])
                  return 'A snippet with that name is already saved!';
                console.log(split[1], extensions.includes(split[1]));
                if (split[1] && !extensions.includes(split[1]))
                  return `${split[1]} is not a valid extension.`;
              }
            }} />;
          });
        }} />
      <ContextMenu.Item
        id='close'
        color='colorDanger'
        label='Delete Snippet'
        action={() => {
          ModalActions.openModal((event: ModalEvent) => {
            return <DeleteModal event={event} action={() => {
              Manager.deleteSnippet(snippet);
              if (snippet === currentSnippet)
                return setCurrentSnippet(lastSnippet);
              forceUpdate();
            }} />;
          });
        }} />
    </ContextMenu.Container>
  ));
};;