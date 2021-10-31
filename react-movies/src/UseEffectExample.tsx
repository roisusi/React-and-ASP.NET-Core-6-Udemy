import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [click, setClick] = useState(0);
  useEffect(() => {
    //Execute Immediatly
    console.log("component loaded");

    return () => {
      //Run Before the componets is destroyed
      console.log("components will be destroyed");

      //**
      //we use depentensis [] - mean run once
    };
  }, []);

  useEffect(() => {
    //this another useEffect render the page again and again
    //what if you dont want it to render other useEffect, see **
    document.title = `${click} times`;
  }, [click]); //rander only when click is change
  return (
    <>
      <h1>UseEffect Example</h1>
      <div>
        <button onClick={() => setClick(click + 1)}>
          You Click is {click} times
        </button>
      </div>
    </>
  );
};

export default UseEffectExample;
