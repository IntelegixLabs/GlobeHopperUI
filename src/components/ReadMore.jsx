import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? <p>{text.slice(0, maxLength)}...</p> : <p>{text}</p>}
      <button className="mt-2 text-gray-600 hover:text-black hover:underline" onClick={toggleTruncate}>
        {isTruncated ? "Read More" : "Read Less"}
      </button>
    </div>
  );
};

export default ReadMore;
