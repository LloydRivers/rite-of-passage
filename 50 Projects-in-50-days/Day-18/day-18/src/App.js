import Input from "./Input";
import React, { useState } from "react";
import Render from "./Render";

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <>
      <div className="App">
        <Input addTodo={addTodo} />
        <Render props={todos} />
      </div>
    </>
  );
}

export default App;
