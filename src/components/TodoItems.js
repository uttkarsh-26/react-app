import React from "react";
import TodoItem from "./TodoItem";

function TodoItems(props) {
  var listItems = props.list.map((item) => (
    <TodoItem key={item.key} item={item} delete={props.delete} />
  ));
  return <ol className="list-group">{listItems}</ol>;
}

export default TodoItems;
