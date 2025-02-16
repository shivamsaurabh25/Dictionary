import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import searchAnimation from "../assets/search.json";

const API_URL = import.meta.env.VITE_DICTIONARY_API_URL;

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const fetchDefinition = async () => {
    if (!word) return;
    try {
      const response = await fetch(`${API_URL}/${word}`);
      const result = await response.json();

      if (response.ok) {
        setData(result[0]);
        setError(null);
        
        const updatedHistory = [...new Set([word, ...history])].slice(0, 5);
        setHistory(updatedHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      } else {
        setData(null);
        setError("Word not found!");
      }
    } catch (err) {
      setError("Error fetching data!");
    }
  };

  const playAudio = () => {
    if (data && data.phonetics.length > 0 && data.phonetics[0].audio) {
      new Audio(data.phonetics[0].audio).play();
    }
  };

  return (
    <div className="dictionary-container">
      <input
        type="text"
        placeholder="Enter a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="search-input"
      />
      <button onClick={fetchDefinition} className="search-btn">
        Search
      </button>

      {!data && !error && <Lottie animationData={searchAnimation} className="animation" />}

      {error && <p className="error">{error}</p>}

      {data && (
        <div className="result">
          <h2>{data.word}</h2>
          {data.phonetics.length > 0 && (
            <>
              <p className="phonetics">{data.phonetics[0].text}</p>
              {data.phonetics[0].audio && (
                <button onClick={playAudio} className="audio-btn">🔊 Play Pronunciation</button>
              )}
            </>
          )}
          <p className="definition">
            <strong>Definition:</strong> {data.meanings[0].definitions[0].definition}
          </p>
          {data.meanings[0].definitions[0].example && (
            <p className="example">
              <strong>Example:</strong> {data.meanings[0].definitions[0].example}
            </p>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="history">
          <h3>🔄 Search History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index} onClick={() => setWord(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dictionary;