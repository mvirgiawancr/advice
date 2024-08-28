import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import "./App.css";
const App = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
        <p className="footer">Created with ❤️ by Virgi</p>
      </div>
    </div>
  );
};

export default App;
