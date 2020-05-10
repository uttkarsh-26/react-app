import React from "react";
import "bootstrap";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

export default function ToDoList() {
  const [items, setItem] = useState([]);

  const addItem = (title) => {
    var newItem;
    if (title) {
      newItem = {
        title,
        key: Date.now(),
        isCompleted: false,
      };
    } else {
      return;
    }

    setItem([...items, newItem]);
  };

  const toggleComplete = (key) => {
    const modItems = items.map((item) => {
      if (item.key === key) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });

    setItem(modItems);
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => {
      return item.key !== key;
    });
    setItem(filteredItems);
  };

  return (
    <div className="container w-50 align-content-center">
      <div className="bg-info my-2">
        <h1 className="card-header"> My ToDo List</h1>
        <AddTodo onSubmit={addItem} />
      </div>
      <TodoItems
        list={items}
        toggleComplete={toggleComplete}
        delete={deleteItem}
      />
    </div>
  );
}
