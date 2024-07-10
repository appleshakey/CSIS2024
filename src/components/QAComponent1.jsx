"use client";
import { useState } from "react";

export default function QAComponent1() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          When and where will the Computer Society India Symposium 2024 be held ?
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
            The Computer Society India Symposium 2024 will take place on 29
            July 2024 to 31 July 2024 at SRM Institute of Science and Technology, located in
            Chennai, India.
          </h1>
        </div>
      )}
    </div>
  );
}
