import { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();

let id = 0;

export function useItems() {
  return useContext(ItemsContext);
}

export function Provider({ children }) {
  const [items, setItems] = useState([]);
  const actions = {
    deleteItem: id => setItems(items => items.filter(item => item._id !== id)),
    deleteItems: items => {
      for (const item of items) {
        actions.deleteItem(item._id);
      }
    },
    postItem: item => setItems(items => [...items, { ...item, _id: id++ }]),
    putItem: updateItem =>
      setItems(items =>
        items.map(item => (item._id === updateItem._id ? updateItem : item))
      ),
    putItems: items => {
      for (const item of items) {
        actions.putItem(item);
      }
    }
  };
  return (
    <ItemsContext.Provider value={[items, actions]}>
      {children}
    </ItemsContext.Provider>
  );
}
