import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    // console.log(randomChoice);
  };

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("You Win!🎉");
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("You Lose!😥");
        break;
      case "paperpaper":
      case "rockrock":
      case "scissorsscissors":
        setResult("It's a Draw!😃");
        break;
    }
  }, [userChoice, computerChoice]);

  return (
    <div className="App">
      <p>Follow me on: <a href="https://github.com/JenilGajjar20" target="_blank">GitHub</a></p>
      <div className="choices">
        <h2>
          User Choice: <span className="userChoice">{userChoice}</span>
        </h2>
        <h2>
          Computer Choice:{" "}
          <span className="computerChoice">{computerChoice}</span>
        </h2>
      </div>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <div className="result">
        <h3>
          {result === "You Win!🎉" ? (
            <span className="win">{result}</span>
          ) : result === "You Lose!😥" ? (
            <span className="lose">{result}</span>
          ) : (
            <span className="draw">{result}</span>
          )}
        </h3>
      </div>
    </div>
  );
}

export default App;
