"use client";
import { useState } from "react";

export default function QAComponent5() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">What is the dress code for the event ?</h1>
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
            The dress code for the Computer Society India Symposium 2024 is
            generally business casual. However, participants are encouraged to
            wear formal attire during the opening and closing ceremonies or any
            specific events where formal dressing is recommended.
          </h1>
        </div>
      )}
    </div>
  );
}
