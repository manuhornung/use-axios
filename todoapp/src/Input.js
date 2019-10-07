import { useItems } from './api';

export default function Input() {
  const [, { postItem }] = useItems();
  return (
    <input
      autoFocus
      className="new-todo"
      onKeyDown={({ keyCode, target }) => {
        const title = target.value.trim();
        if (keyCode === 13 && title) {
          postItem({ title, timestamp: Date.now() });
          target.value = '';
        }
      }}
      placeholder="What needs to be done?"
      type="text"
    />
  );
}
