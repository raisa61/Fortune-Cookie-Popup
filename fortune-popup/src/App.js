import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    fetchFortunes();
  }, []);
  function fetchFortunes() {
    axios
      .get("./data.json") //returns a promise
      .then((res) => {
        console.log(res.data); //logging it into the console to check if correct data is being pulled
        const fortuneLength = res.data.length; //grabbing the length of the array
        //console.log(fortuneLength);

        setFortune(res.data[Math.floor(Math.random() * fortuneLength)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [clicked, setClicked] = useState(false);

  //change image on fortune cookie click
  const clickHandler = (e) => {
    e.target.setAttribute(
      "src",
      "https://i.ibb.co/cksx7kr/kisspng-fortune-cookie-drawing-clip-art-fortune-cookie-5b237469209879-9079770415290502171335.png"
    );
    setClicked(true);
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>
        <img
          className="cookie"
          src="https://i.ibb.co/9YQV2qq/kisspng-fortune-cookie-biscuits-bakery-drawing-clip-art-fortune-cookies-5b0ec5e3013c23-3980054715276.png"
        />
      </button>
      <div
        className="fortuneMessage"
        style={{ visibility: clicked ? "visible" : "hidden" }}
      >
        {fortune}
      </div>
    </div>
  );
}

export default App;
