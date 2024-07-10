"use client";
import { useState } from "react";

export default function QAComponent3() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          What is the registration fee for the event ?
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
            The registration fee for the Computer Society India Symposium 2024
            is announced on the official website. It's recommended to check the
            website for updated information.
          </h1>
        </div>
      )}
    </div>
  );
}
