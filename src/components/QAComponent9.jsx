"use client";
import { useState } from "react";

export default function QAComponent9() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          How can I stay updated with the latest information about the symposium
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
            To stay updated with the latest announcements, schedules, and other
            important information about the Computer Society India Symposium
            2023, it is recommended to regularly visit the official website
            https://www.ieeecssrm.in/.in or follow the official social media channels of the
            event. Additionally, registered participants may receive email
            updates with pertinent details.
          </h1>
        </div>
      )}
    </div>
  );
}
