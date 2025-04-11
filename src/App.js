import "./App.css";
import { getWord, getWordColors } from "./utils/utils.js";
import React, { useCallback, useEffect, useState } from "react";

const wordToPlay = getWord();

function App() {
  const [attempts, setAttempts] = useState(0);
  const [wordTried, setWordTried] = useState([]);

  //Make the input a controlled component
  const [text, setText] = useState("");
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  //function to check if the word is correct
  //This function will add the word to the list of tried words
  //and check if the word is correct
  const checkWord = () => {
    setWordTried([...wordTried, text]);
    if (text === wordToPlay) {
      alert("You guessed the word!");
    }
    // update attempts
    setAttempts(attempts + 1);
    setText("");
  };

  //Side effect to provide feedback to the user that there are no more attemps
  useEffect(() => {
    if (attempts >= 5) {
      alert("You have no more attempts!");
    }
  }, [attempts]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <h2>Try to guess the word!</h2>
      <h3>Attempts: {attempts}</h3>
      <input
        disabled={attempts >= 5}
        type="text"
        maxLength="5"
        onChange={handleChange}
      />
      <button disabled={attempts >= 5} onClick={checkWord}>
        Submit
      </button>

      <h3>Words tried:</h3>
      <ul>
        {wordTried.map((word, index) => (
          <li key={index}>
            {word.split("").map((letter, i) => {
              const color = getWordColors(word, wordToPlay)[i];
              return (
                <span
                  key={i}
                  style={{
                    backgroundColor: color,
                    padding: "5px",
                    margin: "2px",
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </li>
        ))}
      </ul>

      <p>The word to guess is: {wordToPlay}</p>
    </div>
  );
}

export default App;
