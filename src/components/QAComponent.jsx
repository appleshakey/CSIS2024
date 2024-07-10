"use client";
import { useState } from "react";

export default function QAComponent() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          What is the Computer Society India Symposium 2024 ?
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
            The Computer Society India Symposium 2024 is an annual event
            organized by the IEEE Computer Society in collaboration with
            SRM Institute of Science and Technology. It aims to bring together students,
            professionals, and enthusiasts from the field of computer science
            and information technology to share knowledge, insights, and
            experiences.
          </h1>
        </div>
      )}
    </div>
  );
}
