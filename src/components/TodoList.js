import React, { useEffect } from "react";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../thunks";
import {
  getTodos,
  getTodosLoading,
  getCompletedTodos,
  getIncompletetodos,
} from "./selectors";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

// import { displayAlert } from "../thunks";
import "./TodoList.css";

const TodoList = ({
  completedTodos,
  incompleteTodos,
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
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkPressed={onMarkPressed}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
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
  // isLoading: state.isLoading,  ...sin selectors
  // todos: state.todos,
  isLoading: getTodosLoading(state), //con selectors
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompletetodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
