import React, { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import counterContext from "./counterContext";

function App() {
  let countState = useState(0);
  {
    /*idhr variable 1 hai lekin wo CONTEXT mai 2 ho kar jaega like: [countState,setCountState] yani countState ki value zero hai aur abi SetCountState hona baaki hai jo ham child.js mai karenge or ye value yahan se counter context mai jarhi hai jo hamne value neechay countercontext.provider mai pass kari hai*/
  }
  return (
    <counterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
