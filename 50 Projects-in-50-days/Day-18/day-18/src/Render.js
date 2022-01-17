import React from "react";

function Render({ props }) {
  return (
    <div>
      {props.map((prop, index) => {
        return (
          <span key={index}>
            {prop.todo} {prop.date}
          </span>
        );
      })}
    </div>
  );
}

export default Render;
