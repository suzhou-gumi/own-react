import { useState } from "react";
import ReactDOM from "react-dom/client";

function Child() {
  return <span>own-react</span>;
}

function App() {
  const [num, setNum] = useState(100);

  return <div>{num}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
