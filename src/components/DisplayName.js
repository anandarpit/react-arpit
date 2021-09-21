import React from "react";

function handleClick() {
  console.log("Clicked");
}
function handleMouseEnter() {
  console.log("Mouse Entered");
}
function DisplayName() {
  return (
    <div>
      <h4>by Arpit Anand</h4>
      <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
        Click me
      </button>
    </div>
  );
}

export default DisplayName;
