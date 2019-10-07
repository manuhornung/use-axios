import { useItems } from '../api';

export default function ClearCompleted() {
  const [items, { deleteItems }] = useItems();
  const completedItems = items.filter(({ completed }) => completed);
  const { length } = completedItems;
  return length ? (
    <button
      className="clear-completed"
      onClick={() => deleteItems(completedItems)}
      type="button"
    >
      Clear completed ({length})
    </button>
  ) : null;
}
