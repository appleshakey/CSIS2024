"use client";
import { useState } from "react"

export default function QAComponent(){
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className=" border-b-2 border-white">
            <div className="text-white font-staat flex justify-between items-center font-bold">
                <h1 className="text-xl">This is the Question</h1>
                <button className="text-2xl" onClick={() => {setShowAnswer(!showAnswer)}}>+</button>
            </div>
            {showAnswer && (
                <div className="flex justify-start text-white font-staat text-lg">
                    <h1>This is the answer</h1>
                </div>
            )}
        </div>
    )
}