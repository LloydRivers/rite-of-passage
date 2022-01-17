import React, { useState } from "react";

function Input({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleState(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ todo, date });
  }
  return (
    <div>
      <input value={todo} onChange={handleState} type="text" />
      <input value={date} onChange={handleDate} type="date" />

      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
}

export default Input;
