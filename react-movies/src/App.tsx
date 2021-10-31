import { useState } from "react";
import "./App.css";
import UseEffectExample from "./UseEffectExample";

function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExample />}
    </>
  );
}

export default App;
