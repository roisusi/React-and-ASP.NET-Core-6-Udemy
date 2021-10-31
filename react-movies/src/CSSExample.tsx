// ------ Important ------ //
/* 
Importing like this affect THE WHOLE APPLICATION,
Every components will recognize this css
import "./CSSExanples.css";
*/
//SOLUSION importing css as module.css

import Css from "./CSSExample.module.css";

const CSSExample = () => {
  //First CSS working is Global CSS file which is on index.css
  //Second CSS working is page only (this one) style={ jsx as var{ style as object}}
  //Third is to write is as Object Variable like "squre"
  //Fourth is to import ONLY module.css and give it a name like Css

  const squre = {
    backgroundColor: "green",
    height: "50px",
    width: "50px",
    marginLeft: "1rem",
  };
  return (
    <>
      <h1 className="red">CSS Examples</h1>
      <h2 style={{ color: "blue", fontSize: "70px" }}>Subtest</h2>
      <div style={squre}></div>
      <br />
      <div style={squre}></div>
      <br />
      <h2 className={Css["primary-color"]}>This is a module Text</h2>
      <h2 className="primary-color">This is not from module</h2>
    </>
  );
};
export default CSSExample;
