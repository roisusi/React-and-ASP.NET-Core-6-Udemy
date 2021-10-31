import { parse } from "path";
import { useState } from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";
import ProjectContent from "./ProjectContent";
const ConditionalidSeveralComponents = () => {
  const [selectedRate, setSelectedRate] = useState(1);

  const diplayResult = () => {
    if (selectedRate === 1) {
      return <span>Nooo!</span>;
    } else if (selectedRate === 2) {
      return (
        <>
          <span>Please tell us how to gget better </span>
          <input type="text" />
        </>
      );
    } else if (selectedRate === 3) {
      return (
        <>
          <Simple />
        </>
      );
    } else {
      return <span>Thanks !!!</span>;
    }
  };

  return (
    <>
      <h1>Conditional if Example</h1>

      <div>Rate this website</div>
      <SelectNumber
        maxValue={6}
        onSelected={setSelectedRate}
        selectContant={(value) => {
          return `Select ${value}`;
        }}
      />
      {/* <div>{diplayResult()}</div> */}
      <ProjectContent buttonPart={<>This is the end</>}>
        <button onClick={() => console.log("clicked")}>
          This is Button as a Paramater
        </button>
        <Simple />
      </ProjectContent>
    </>
  );
};
export default ConditionalidSeveralComponents;
