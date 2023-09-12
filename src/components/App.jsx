import React, { useState } from "react";

function App() {
  const [inputText, setInputtext] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputtext(newValue);
  }
  function add() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="check"
          type="text"
          value={inputText}
        />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
