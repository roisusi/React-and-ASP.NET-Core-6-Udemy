import { useContext } from "react";
import ValueContext from "./ValueContext";

const Child = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <h3>Chiled Component</h3>
      <h4>The Value is: {value.toString()}</h4>
    </>
  );
};

export default Child;
