import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer, 1);
  return (
    <div>
      <h2>The Second Child using UseReducer</h2>
      <h3>the value of second child is {state}</h3>
      <button onClick={() => dispatch("INCREMENT")}>Update Reducer</button>
    </div>
  );
};
export default Child2;
