import React from "react";

function Render({ props, deleteToDo }) {
  function handleDelete(index) {
    deleteToDo(index);
  }

  return (
    <div>
      {props.map((prop, index) => {
        return (
          <>
            <span key={index}>
              {prop.todo} {prop.date}
            </span>
            <button onClick={handleDelete.bind(this, index)}>X</button>
          </>
        );
      })}
    </div>
  );
}

export default Render;
