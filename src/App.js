import React from "react";
import "bootstrap";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";

class ToDoList extends React.Component {
  state = {
    items: [],
  };

  addItem = (title) => {
    var newItem;
    if (title) {
      newItem = {
        title,
        key: Date.now(),
      };
    } else {
      return;
    }

    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <div className="container w-50 align-content-center">
        <div className="bg-info my-2">
          <h1 className="card-header"> My ToDo List</h1>
          <AddTodo onSubmit={this.addItem} />
        </div>
        <TodoItems list={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default ToDoList;
