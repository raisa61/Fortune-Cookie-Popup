import React, { useState } from "react";

function App() {
  const fortuneMessages = [
    "A fresh start will put you on your way.",
    "A hunch is creativity trying to tell you something.",
    "A good time to finish up old tasks.",
  ];

  const [fortune, setFortune] = useState("");

  const clickHandler = () => {
    const fortuneLength = fortuneMessages.length;
    setFortune(fortuneMessages[Math.floor(Math.random() * fortuneLength)]);
  };
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={clickHandler}>click me</button>
      <div>{fortune}</div>
    </div>
  );
}

export default App;
