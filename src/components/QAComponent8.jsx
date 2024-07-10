"use client";
import { useState } from "react";

export default function QAComponent8() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          Can I receive a participation certificate for attending the symposium
          ?
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
            Yes, all registered participants will receive a participation
            certificate after attending the Computer Society India Symposium
            2024. It serves as proof of your involvement in the event and can be
            valuable for your academic or professional profile.
          </h1>
        </div>
      )}
    </div>
  );
}
