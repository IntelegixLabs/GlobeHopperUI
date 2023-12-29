import React, { useEffect, useReducer, useRef, useState } from "react";

const SentencePrintAtInterval = ({ sentence }) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    setWords(sentence.split(" "));
  }, [sentence]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentWordIndex < words.length) {
        setCurrentWord((prev) => prev + words[currentWordIndex] + " ");
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, words]);

  return <div className="leading-5">{currentWord}</div>;
};

export default SentencePrintAtInterval;
