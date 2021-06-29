import React from "react";
import "./TodoListItem.css";
const TodoListItem = ({ todo, onRemovePressed, onMarkPressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="btn-container">
      {todo.isCompleted ? null : 
        <button
          onClick={() => onMarkPressed(todo.text)}
          className="btn-completed"
        >
          Mark completed
        </button>
      }
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="btn-removed"
      >
        Remove task
      </button>
    </div>
  </div>
);
export default TodoListItem;
