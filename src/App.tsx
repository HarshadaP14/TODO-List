import React from 'react';
import './App.css';
import {render} from "react-dom";
import Task from './Task';
import Provider from "./Provider";
import "./style.css"
function App() {
  return (
    <div className="App">
      {/* <h2>Hello</h2> */}
      <Provider>
        <Task />
      </Provider>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { initialTodos } from "./components/initialTodos"
// import { TodoList } from "./components/TodoList";
// import { AddTodoForm } from "./components/AddTodoForm";

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

//   const toggleComplete: ToggleComplete = selectedTodo => {
//     const updatedTodos = todos.map(todo => {
//       if (todo === selectedTodo) {
//         return { ...todo, complete: !todo.complete };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const addTodo: AddTodo = newTodo => {
//     newTodo.trim() !== "" &&
//       setTodos([...todos, { text: newTodo, complete: false }]);
//   };

//   return (
//     <React.Fragment>
//       <TodoList todos={todos} toggleComplete={toggleComplete} />
//       <AddTodoForm addTodo={addTodo} />
//     </React.Fragment>
//   );
// };

// export default App;