import React, { useState } from "react";

function RandomTextLoading({ textClass, iconClass }) {
  const sentences = [
    "Adjusting travel settings",
    "Exploring new destinations",
    "Capturing memories",
    "Earning funds",
    "Unlocking traits",
    "Toggling travel grid",
    "Adjusting comfort settings",
    "Interacting with locals",
    "Planning itinerary",
    "Earning Satisfaction",
    "Choosing travel companions",
    "Packing essentials",
    "Finding unique collectibles",
    "Capturing landscapes",
    "Laughing with Travel Mic",
    "Unlocking new destinations",
    "Staying entertained",
    "Trying local cuisine",
    "Immersing in local culture",
    "Enhancing language skills",
    "Staying refreshed",
    "Taking selfies",
    "Completing whims",
    "Upgrading accommodations",
    "Participating in special events",
    "Connecting with travelers",
    "Unlocking travel traits",
    "Following local customs",
    "Discovering talents",
    "Boosting social skills",
    "Customizing travel wardrobe",
    "Journaling experiences",
    "Navigating with Map feature",
    "Experiencing thrill",
  ];

  const [showSentence, setShowSentence] = useState("");

  function printRandomWord() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setShowSentence(sentences[randomIndex]);
  }

  useState(() => {
    if(!showSentence) {
      printRandomWord();
    }

    const intervalId = setInterval(() => {
      printRandomWord();
    }, 3000); // Adjust the interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
      <p className={`text-lg ${textClass}`}>
        <i
          className={`fa-solid fa-circle-notch fa-spin fa-fw mr-2`}
        ></i>
        {showSentence} ...
      </p>
  );
}

export default RandomTextLoading;
