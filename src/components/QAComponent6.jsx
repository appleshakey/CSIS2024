"use client";
import { useState } from "react";

export default function QAComponent6() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className=" border-b-2 border-white ">
      <div className="text-white tracking-wider font-staat flex justify-between items-center font-bold">
        <h1 className="text-xl">
          Can I present a paper or a project at the symposium ?
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
            Yes, the symposium usually accepts submissions for research papers
            and projects related to the field of computer science and
            technology. Keep checking the official socials for a link that'll be
            opening for paper submissions, and it will be reviewed by a panel of
            experts. If accepted, you may have the opportunity to present your
            paper or project during the event.
          </h1>
        </div>
      )}
    </div>
  );
}
