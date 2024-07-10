"use client";
import { useState } from "react";

export default function QAComponent7() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          Will there be any workshops or training sessions during the symposium?
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
            Yes, the Computer Society India Symposium 2024 will likely include
            workshops and training sessions conducted by industry experts and
            renowned professionals. These workshops aim to provide participants
            with practical knowledge and hands-on experience in various areas of
            computer science and technology.
          </h1>
        </div>
      )}
    </div>
  );
}
