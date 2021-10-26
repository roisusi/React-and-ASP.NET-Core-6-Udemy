import React from "react";

const Expressions = () => {
  const subTest = "this is my Subtext";
  const logoURL =
    "https://www.leaderim.com/wp-content/uploads/2020/02/Partner-logo-2016-550x275.png";

  const duplicate = (value: number) => {
    return value * 2;
  };

  return (
    <>
      <h1>Expressions examples</h1>
      <h2>{subTest.toUpperCase()}</h2>
      <h3>The doubleof 3 is equal to {duplicate(3)}</h3>
      <img src={logoURL} alt="Partner Logo"></img>
    </>
  );
};

export default Expressions;
