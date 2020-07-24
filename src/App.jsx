import React from "react";
import "./index.css";
const App = () => {
  let curretnDate = new Date();
  const cssStyle = {};
  curretnDate = curretnDate.getHours();
  let greetings = "";
  if (curretnDate >= 1 && curretnDate < 12) {
    greetings = "Good Morning";
    cssStyle.color = "green";
  } else if (curretnDate >= 12 && curretnDate < 19) {
    greetings = "Good Afternoon";
    cssStyle.color = "Orange";
  } else {
    greetings = "Good Night";
    cssStyle.color = "Black";
  }
  return (
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greetings}</span>
      </h1>
    </div>
  );
};
export default App;
