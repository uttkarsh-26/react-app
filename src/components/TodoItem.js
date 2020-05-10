import React from "react";

function TodoItem(props) {
  const lineThrough = props.item.isCompleted ? "line-through" : "none";

  const styles = {
    padding: "0px 10px",
    textDecoration: lineThrough,
  };

  return (
    <li className="list-group-item-action my-2">
      <input
        type="checkbox"
        name="completed"
        onChange={() => props.toggleComplete(props.item.key)}
      />
      <span style={styles}>{props.item.title}</span>
      <button
        className="btn-danger btm-sm float-right"
        onClick={() => props.delete(props.item.key)}
      >
        Delete
      </button>
    </li>
  );
}
export default TodoItem;
