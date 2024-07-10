"use client";
import { useState } from "react";

export default function QAComponent4() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
        What is the theme of the event ?
        </h1>
        <button
          className="text-2xl"
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          +
        </button>
      </div>
      {showAnswer && (
        <div className="flex justify-start text-white font-inter text-lg mt-2">
          <h1>
          The theme for CSIS 2024 at SRM Institute of Science and Technology is Embracing the AI Revolution: Redefining Possibilities
          </h1>
        </div>
      )}
    </div>
  );
}
