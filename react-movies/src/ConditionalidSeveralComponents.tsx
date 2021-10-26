import { parse } from "path";
import { useState } from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";
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
      <SelectNumber maxValue={6} onSelected={setSelectedRate} />
      <div>{diplayResult()}</div>
    </>
  );
};
export default ConditionalidSeveralComponents;
