import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompletetodos,
} from "./selectors";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../thunks";


const ListWrapper = styled.div `
  max-width: 70vw;
  margin: auto;
`;

//creating a dummy styled  component
const BigRedText = styled.h1`  
font-family: Candara;
font-size: 3rem;
text-align: center;
color: tomato;
`;

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
    <ListWrapper>
      <BigRedText>ToDo List</BigRedText>
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
    </ListWrapper>
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
