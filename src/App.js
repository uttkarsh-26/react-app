import React from "react";
import "bootstrap";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var newItem;
    e.preventDefault();
    if (this.input.value) {
      newItem = {
        text: this.input.value,
        key: Date.now(),
      };
    } else {
      return;
    }

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem),
      };
    });

    this.input.value = "";
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    var key;
    return (
      <div className="container w-50 align-content-center">
        <div className="bg-info my-2">
          <h1 className="card-header"> My ToDo List</h1>

          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this.input = a)}
              className="form-control"
              placeholder="Enter a Todo task"
            ></input>
            <button className="btn-success my-2" type="submit">
              Add
            </button>
          </form>
        </div>
        <TodoItems list={this.state.items} click={this.deleteItem} />
      </div>
    );
  }
}

function TodoItems(props) {
  var todoEntries = props.list;

  var listItems = todoEntries.map((item) => (
    <li className="list-group-item-action my-2" key={item.key}>
      {item.text}
      <button
        className="btn-danger btm-sm float-right"
        onClick={() => props.click(item.key)}
      >
        Delete
      </button>
    </li>
  ));
  return <ol className="list-group">{listItems}</ol>;
}

export default ToDoList;
