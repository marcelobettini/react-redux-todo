import React from "react";
import "./TodoListItem.css";
const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="btn-container">
      <button className="btn-completed">Mark completed</button>
      <button className="btn-removed">Remove task</button>
    </div>
  </div>
);
export default TodoListItem;
