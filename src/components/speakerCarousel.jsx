"use client";
import { RotateRight } from "@mui/icons-material";
import SpeakerTile from "./SpeakerTile";
import { useState } from "react";
import { motion } from "framer-motion";
export default function SpeakerCarousel(){
    const [showSpeaker, setShowSpeaker] = useState([1, 0, 0, 0, 0]);
    const [timeup, setTimeUp] = useState(true);

    const rotateLeft = () => {
        // if(showSpeaker[0] == 1){return;}
        if(timeup){
        setTimeUp(false);
        const newSpeakers = showSpeaker.map((e, i) => {
            if(showSpeaker[(i+1)%5] == 1){
                return 1;
            }
            else{
                return 0;
            }
        });
        setShowSpeaker(newSpeakers);
        setTimeout(() => setTimeUp(true), 3000);
    }
    }

    // const rotateRight = () => {
    //     if(showSpeaker[4] == 1){return;}
    //     if(timeup){
    //     setTimeUp(false);
    //     const newSpeakers = showSpeaker.map((e, i) => {
    //         if(showSpeaker[(i-1)%5] == 1){
    //             return 1;
    //         }
    //         else{
    //             return 0;
    //         }
    //     });
    //     console.log(newSpeakers);
    //     setShowSpeaker(newSpeakers);
    //     setTimeout(() => setTimeUp(true), 200);
    // }
    // }

    const id = setInterval(() => {
        const button = document.querySelector(".leftButton");
        if(button){button.click();}
        else{
            clearInterval(id);
        }  
    }, 1000);

    return(
        <motion.div className="flex gap-10">
              {/* <SpeakerCard
                heading="Saptarshi Ghosh"
                para="President of Students & Young Professionals at IEEE Computer Society.Leading strategic activities and initiatives for the world's largest organisation related to Computer Science. ASIC Design Engineer (SoC) at Intel Corporation, driving best-in-class performance for Intel Xeon Memory Controllers, aligning IP with CEO's IDM2.0 Strategy. based in Santa Clara County, California, United States, and San Francisco Bay Area."
                image="/speakers1.jpg"
              />
              <SpeakerCard
                heading="Shivam Abhilash"
                para="  Experienced technology leader with a demonstrated history of
                    working in the management consulting industry. Skilled in
                    Machine Learning, NLP, Graph, Production ready ML Solutions,
                    Leadership, Management and Solution Delivery. Strong
                    business development professional graduated from Indian
                    Institute Of Information Technology having knowledge of Data
                    Analytics."
                image="/speakers2.jpg"
              />
              <SpeakerCard
                heading="Nikky Kumar Jha"
                para="Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields."
                image="/speakers3.jpg"
              /> */}
              <button onClick={() => rotateLeft()} className="text-white leftButton hidden">rotateLeft</button>
              {showSpeaker[0] == 1 && (<SpeakerTile speakerName="Nikky Kumar Jha" speakerImg="/speakers3.jpg" speakerDescription="Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields."/>)}

              {showSpeaker[1] == 1 && (<SpeakerTile speakerName="Saptarshi Ghosh" speakerImg="/speakers1.jpg" speakerDescription="President of Students & Young Professionals at IEEE Computer Society.Leading strategic activities and initiatives for the world's largest organisation related to Computer Science. ASIC Design Engineer (SoC) at Intel Corporation, driving best-in-class performance for Intel Xeon Memory Controllers, aligning IP with CEO's IDM2.0 Strategy. based in Santa Clara County, California, United States, and San Francisco Bay Area."/>)}

              {showSpeaker[2] == 1 && (<SpeakerTile
                speakerName="Shivam Abhilash"
                speakerDescription="Experienced technology leader with a demonstrated history of working in the management consulting industry. Skilled in
                    Machine Learning, NLP, Graph, Production ready ML Solutions,
                    Leadership, Management and Solution Delivery. Strong
                    business development professional graduated from Indian
                    Institute Of Information Technology having knowledge of Data
                    Analytics."
                speakerImg="/speakers2.jpg"
              />)}

              {showSpeaker[3] == 1 && (<SpeakerTile
                speakerName="Sandeep Varma"
                speakerDescription="Sandeep is a thought leader and chief architect of multiple large-scale enterprise big data platforms, and he heads all delivery from ZS’s big data center of excellence in India. He specializes in rapidly building high-performance teams focused on cutting-edge technologies and high-quality delivery.He did MBA in marketing and systems from BIM Trichy and a bachelor’s in mechanical engineering from Bengaluru University."
                speakerImg="/image6.jpeg"
              />)}
              {showSpeaker[4]==1 && (<SpeakerTile
                speakerName="Soma Prathibha "
                speakerDescription="Dr. Soma Prathibha is a distinguished academic and thought leader with a profound impact in Cloud Computing, Data Science, and Blockchain. She has organized over 10 national and international events, published 16 research papers in top-tier international journals, and presented at 21 international and 15 national conferences."
                speakerImg="/image5.jpeg"
              />)}
              {/* <button onClick={() => rotateRight()} className="text-white">rotateRight</button> */}
            </motion.div>
    )}
