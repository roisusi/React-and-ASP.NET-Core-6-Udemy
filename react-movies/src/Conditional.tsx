import React, { useState } from "react";

const Conditional = () => {
  const [canSee, setCanSee] = useState(true);

  const clickButtonHandler = () => {
    setCanSee(!canSee);
  };

  return (
    <>
      <h1>Conditionals Expample</h1>
      <button onClick={clickButtonHandler}>Click here</button>
      {canSee ? (
        <div>You are seeing the secret</div>
      ) : (
        <div>You are not allowed to see</div>
      )}
    </>
  );
};

export default Conditional;
