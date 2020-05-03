import React from "react";

export default function TodoItem(props) {
  return (
    <li className="list-group-item-action my-2">
      {props.item.title}
      <button
        className="btn-danger btm-sm float-right"
        onClick={() => props.delete(props.item.key)}
      >
        Delete
      </button>
    </li>
  );
}
