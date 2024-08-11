import React from "../../dist/node_modules/react";
import ReactDOM from "../../dist/node_modules/react-dom";

const jsx = (
  <div>
    <span>own-react</span>
  </div>
);

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(jsx);

console.log(React);
console.log(jsx);
console.log(ReactDOM);
