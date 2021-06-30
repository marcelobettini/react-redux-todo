import React, { useEffect } from "react";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../thunks";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

// import { displayAlert } from "../thunks";
import "./TodoList.css";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, [startLoadingTodos]);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkPressed={onMarkPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
