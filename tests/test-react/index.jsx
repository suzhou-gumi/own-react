import React from "../../dist/node_modules/react";
import ReactDOM from "../../dist/node_modules/react-dom";

function App() {
  return (
    <div>
      <span>own-react</span>
    </div>
  );
}

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(<App />);

console.log(React);
console.log(ReactDOM);
