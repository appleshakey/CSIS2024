"use client";
import { useEffect } from "react";
export default function Day1(){
    useEffect(() => {
        const canvas = document.getElementById("Canvas");
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const dayImage = document.getElementById("day");
        const nightImage = document.getElementById("night");
        ctx.drawImage(dayImage, 0, 0);
        ctx.drawImage(nightImage, 900, 0);
        const vectors = [[{x: 45, y: 100}, {x: 45, y: 200}, {x: 200, y:200}], [{x: 200, y: 300}, {x: 100, y: 300}, {x: 100, y: 400}], [{x: 100, y: 450}, {x: 300, y: 450}], [{x: 375, y: 495}, {x: 630, y: 495}, {x: 700, y: 450}], [{x: 750, y: 300}], [{x: 750, y: 200}, {x: 850, y: 200}], [{x:850, y: 100}, {x: 925, y:100}]];
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.fillStyle = "#0a2f5a";
        ctx.fillRect(vectors[0][0]['x']-7.5, vectors[0][0]['y']-7.5, 15, 15);
        ctx.moveTo(vectors[0]['x'], vectors[0]['j']);
        ctx.beginPath();
        for(let i = 0; i < vectors.length; i++) {
            ctx.fillStyle = "#0a2f5a";
            ctx.fillRect(vectors[i]['x'], vectors[i]['y'], 10, 10);
            for(let j = 0; j < vectors[i].length; j++){
                ctx.lineTo(vectors[i][j]['x'], vectors[i][j]['y']);
                ctx.stroke();
            }
            ctx.fillStyle = "#0a2f5a";
            ctx.fillRect(vectors[i][vectors[i].length-1]['x']-7.5, vectors[i][vectors[i].length-1]['y']-7.5, 15, 15);
        }
    }, [])
    return(
        <div className="text-white flex h-[100vh] w-[100vw] justify-center items-center">
            <div className="flex flex-col justify-between mt-10">
                <div className="flex justify-between opacity-0">
                    <img src="/schedule/Day.svg" id="day"/>
                    <img src="/schedule/Night.svg" id="night"/>
                </div>
                <canvas id="Canvas" width={1000} height={500}></canvas>
            </div>
        </div>
    )
}