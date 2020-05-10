import React from "react";
import TodoItem from "./TodoItem";

function TodoItems(props) {
  var listItems = props.list.map((item) => (
    <TodoItem
      key={item.key}
      item={item}
      toggleComplete={props.toggleComplete}
      delete={props.delete}
    />
  ));
  return (
    <ul className="list-group" style={styles}>
      {listItems}
    </ul>
  );
}

const styles = {
  listStyle: "none",
};

export default TodoItems;
