import { useContext } from "react";
import Child from "./Child";
import ValueContext from "./ValueContext";

const Parent = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <div>From The Parent {`The value is ${value}`}</div>
      <Child />
    </>
  );
};

export default Parent;
