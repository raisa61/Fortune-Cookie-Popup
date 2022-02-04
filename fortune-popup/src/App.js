import React, { useState } from "react";
import "./App.css";

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
      <button onClick={clickHandler}>
        <img
          className="cookie"
          src="https://i.ibb.co/9YQV2qq/kisspng-fortune-cookie-biscuits-bakery-drawing-clip-art-fortune-cookies-5b0ec5e3013c23-3980054715276.png"
        />
      </button>
      <div>{fortune}</div>
    </div>
  );
}

export default App;
