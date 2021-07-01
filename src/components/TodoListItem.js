import React from "react";
import styled from "styled-components";

//8640000 = one day
const TodoItemContainer = styled.div`
  min-width: 50vw;
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 4)
      ? "none"
      : "2px solid red"};
`;
const BtnContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #225322;
  color: white;
`;
const BtnCompleted = styled(Button)`
  background-color: #225322;
`;
const BtnRemoved = styled(Button)`
  background-color: #d84f00;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onMarkPressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <BtnContainer>
        {todo.isCompleted ? null : (
          <BtnCompleted onClick={() => onMarkPressed(todo.id)}>
            Mark completed
          </BtnCompleted>
        )}
        <BtnRemoved onClick={() => onRemovePressed(todo.id)}>
          Remove task
        </BtnRemoved>
      </BtnContainer>
    </Container>
  );
};
export default TodoListItem;
