import Input from "./Input";
import React, { useState } from "react";
import Render from "./Render";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  function deleteToDo(index) {
    let filter = todos.filter((element, idx) => {
      return idx !== index;
    });
    setTodos(filter);
  }
  return (
    <>
      <div className="App">
        <div className="input">
          <Input addTodo={addTodo} />
          <Render props={todos} deleteToDo={deleteToDo} />
        </div>
      </div>
    </>
  );
}

export default App;
