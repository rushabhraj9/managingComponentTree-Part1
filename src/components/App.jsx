import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function deleteItem(id) {
    setItems(prevItems => {
      console.log(prevItems);

      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {items.map((todoItem, index) => {
          return (
            <List
              key={index}
              id={index}
              items={todoItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
