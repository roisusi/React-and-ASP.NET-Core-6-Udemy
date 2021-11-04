import { useState } from "react";
import "./App.css";
import UseEffectExample from "./UseEffectExample";
import GradParent from "./GradParent";
import ValueContext from "./ValueContext";
import DisplayGrade from "./DisplayGrade";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [hide, setHide] = useState(false);
  const grade = [75, 95, -5, 55];
  return (
    <>
      {/* <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExample />}
      <ValueContext.Provider value={hide}>
        <GradParent />
      </ValueContext.Provider> */}

      {grade.map((grade, index) => (
        <ErrorBoundary
          key={index}
          // errorUI={<h3>There was an error displaying the grade</h3>}
          //i will see the throw this is impossible or my display as above
        >
          <DisplayGrade grade={grade} key={index} />
        </ErrorBoundary>
      ))}
    </>
  );
}

export default App;
