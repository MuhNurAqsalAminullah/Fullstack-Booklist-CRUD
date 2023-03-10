import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
