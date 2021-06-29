// import React, { useState } from "react";
// import { connect } from "react-redux"; //connect is a high order function connect()()
// import { createTodo } from "./actions";
// import "./NewTodoForm.css";
// const NewTodoForm = ({ todos, onCreatePressed }) => {
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <div className="new-todo-form">
//       <input
//         className="new-todo-input"
//         type="text"
//         placeholder="Type new todo here..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           const isDuplicateText = todos.some(
//             (todo) => todo.text === inputValue
//           );
//           if (!isDuplicateText) {
//             onCreatePressed(inputValue);
//             setInputValue("");
//           }
//         }}
//         className="new-todo-btn"
//       >
//         Create ToDo
//       </button>
//     </div>
//   );
// };

// /* el argumento state que se pasa a mapStateToProps  es un objeto que representa el estado entero de Redux
// y su función consiste en tomar el objeto state y retornar otro objeto con las piezas del estado
// que necesita nuestro componente */

// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

// /* trabaja en forma similar: las propiedades del objeto que retornemos, serán
// pasadas al componente como props. Pero no toma el state de Redux como argumento sino
// algo llamado dispatch, una función que permite a nuestros componentes disparar actions
// a la que nuestro store responderá */

// const mapDispatchToProps = (dispatch) => ({
//   onCreatePressed: (text) => dispatch(createTodo(text)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
