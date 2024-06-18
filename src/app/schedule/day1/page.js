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
        const vectors = [[{x: 37, y: 75}, {x: 37, y: 200}, {x: 200, y:200}], [{x: 200, y: 250}, {x: 100, y: 250}, {x: 100, y: 350}], [{x: 100, y: 450}, {x: 200, y: 450}], [{x: 250, y: 495}, {x: 500, y: 495}, {x: 550, y: 450}], [{x: 650, y: 350}], [{x: 650, y: 250}, {x: 700, y: 250}], [{x:700, y: 150}]];
        const events = [
            "Registration HelpDesk", "Registration HelpDesk", "Registration HelpDesk", "Registration HelpDesk", "Registration HelpDesk", "Registration HelpDesk", "Registration HelpDesk", "Registration HelpDesk"
        ];
        const venue = [
            "Auditorium", "Auditorium", "Auditorium", "Auditorium", "Auditorium", "Auditorium", "Auditorium", "Auditorium",
        ];
        const Time = [
            "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM", "Aug 26,2023 10:00AM",
        ]

        //line width
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.fillStyle = "#156693";

        //creating the track
        ctx.fillRect(vectors[0][0]['x']-7.5, vectors[0][0]['y']-7.5, 15, 15);
        ctx.moveTo(vectors[0]['x'], vectors[0]['y']);
        ctx.beginPath();

        for(let i = 0; i < vectors.length; i++) {
            
            ctx.fillStyle = "#156693";
            ctx.fillRect(vectors[i]['x'], vectors[i]['y'], 10, 10);
            
            for(let j = 0; j < vectors[i].length; j++){
                ctx.lineTo(vectors[i][j]['x'], vectors[i][j]['y']);
                ctx.stroke();
            }
            //Event marker
            ctx.fillStyle = "#156693";
            ctx.fillRect(vectors[i][vectors[i].length-1]['x']-7.5, vectors[i][vectors[i].length-1]['y']-7.5, 15, 15);

            //Event name
            ctx.fillStyle = "white";
            ctx.font = "30px Staatliches";
            ctx.fillText(events[i], vectors[i][vectors[i].length-1]['x']+14, vectors[i][vectors[i].length-1]['y'] +8);
            ctx.font = "20px Inter";
            ctx.fillStyle = "#156693";
            

            //Event venue
            ctx.fillText(`Venue: ${venue[i]}`, vectors[i][vectors[i].length-1]['x']+50, vectors[i][vectors[i].length-1]['y']-40);

            //Event time
            ctx.fillText(`Time: ${Time[i]}`, vectors[i][vectors[i].length-1]['x']+50, vectors[i][vectors[i].length-1]['y']+33);
        }

        ctx.lineTo(700, 75);
        ctx.lineTo(925, 75);
        ctx.stroke();
        ctx.fillStyle = "#156693";
        ctx.fillRect(925-7.5, 75-7.5, 15, 15);


        // let pointer = 0;
        // let animationId;
        // const draw = () => {
        //     ctx.fillRect(vectors[pointer]['x'], vectors[pointer]['y'], 10, 10);
        //     for (let i = 0; i < vectors[pointer].length; i++){
        //         ctx.lineTo(vectors[pointer][i]['x'], vectors[pointer][i]['y']);
        //     }
        //     ctx.stroke();

        //     //event marker
        //     ctx.fillStyle = "#156693";
        //     ctx.fillRect(vectors[pointer][vectors[pointer].length-1]['x']-7.5, vectors[pointer][vectors[pointer].length-1]['y']-7.5, 15, 15);

        //     //event text
        //     ctx.fillStyle = "white";
        //     ctx.font = "30px Staatliches";
        //     ctx.fillText(events[pointer], vectors[pointer][vectors[pointer].length-1]['x']+10, vectors[pointer][vectors[pointer].length-1]['y'] +5);
            
        //     pointer++;
        //     if(pointer >= vectors.length){
        //         return;
        //     }
        //     animationId = requestAnimationFrame(draw);
        // };

        // function startAnimation() {
        //     if (!animationId) {
        //         draw(); 
        //     }
        // }

        // function stopAnimation(){
        //     if (animationId){
        //         cancelAnimationFrame(animationId);
        //         animationId = null;
        //     }
        // }
        
        // startAnimation();
    }, [])
    return(
        <div className="text-white flex h-[100vh] w-[100vw] justify-center items-center">
            <div className="flex flex-col justify-between mt-10 ">
                <div className="flex justify-between opacity-0">
                    <img src="/schedule/Day.svg" id="day"/>
                    <img src="/schedule/Night.svg" id="night"/>
                </div>
                <canvas id="Canvas" width={1000} height={500}></canvas>
            </div>
        </div>
    )
}