"use client";
import { useState } from "react";

export default function QAComponent2() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          How can I register for the Computer Society India Symposium 2024 ?
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
            You can register for the Computer Society India Symposium 2024 by
            visiting the official website https://www.ieeecssrm.in/ and filling out the
            online registration form.
          </h1>
        </div>
      )}
    </div>
  );
}
