import React, { useContext } from "react";
import counterContext from "./counterContext";
const Child = () => {
  let counterValue = useContext(counterContext);
  return (
    <div>
      <h2>The first child using Context</h2>
      <h3>The value of first child is {counterValue[0]}</h3>{" "}
      {/*<-- idhr jo array mai value (0) hai wo useState se arhi he jo countercontext ko bhej rha he Jo hamne App.js mai banaya tha*/}
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Update Context
      </button>
    </div>
  );
};
export default Child;
