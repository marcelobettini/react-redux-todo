import React from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";

const AppDiv = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`;

const App = () => (
  <AppDiv>
    <TodoList></TodoList>
  </AppDiv>
);

export default App;
