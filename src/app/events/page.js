"use client";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Event() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const [ideathonGuidlines, setIdeathonGuidlines] = useState(false);
  const [codeCompGuidlines, setCodeCompGuidlines] = useState(false);

  const showIdeathonGuidlines = () => {
    if (!ideathonGuidlines){
    const body = document.querySelector("body");
    body.style.position = "fixed";
    setIdeathonGuidlines(!ideathonGuidlines);
    console.log("guidlines shown");
    }
    else{
      setIdeathonGuidlines(!ideathonGuidlines);
      const body = document.querySelector("body");
      body.style.position = "static";
    }
  }

  const showCodeCompGuidlines = () => {
    if (!codeCompGuidlines){
      const body = document.querySelector("body");
      body.style.position = "fixed";
      setCodeCompGuidlines(!codeCompGuidlines);
      console.log("guidlines shown");
      }
      else{
        setCodeCompGuidlines(!codeCompGuidlines);
        const body = document.querySelector("body");
        body.style.position = "static";
      }
  }

  return (
    <motion.div>
      {isNonMobileScreen ? (
        <motion.div>
          {ideathonGuidlines && (
            <motion.div className="fixed w-[100vw] h-[100vh] bg-gray-700 bg-opacity-45 flex justify-center items-center shadow-2xl">
              <motion.div className="w-[75vw] h-[75vh] bg-slate-900 flex flex-col py-6 px-5 overflow-y-scroll relative">
                <div className="right-5 justify-end text-3xl text-white absolute">
                  <button onClick={() => showIdeathonGuidlines()}>X</button>
                </div>
                <div className="flex flex-col font-staat text-white gap-10">
                  <div className="flex justify-center text-5xl text-[#4a8ec5]">
                    <h1>Guidlines For Ideathon</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">1.Team Foundation</h1>
                    <p className="text-xl">&nbsp; &nbsp; &nbsp; &nbsp; Teams must consist of a minimum of 1 and a maximum of 4 members, as specified by the organizers.</p>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">2.Topic</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The Topic will be given on spot.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">3.Powerpoint Presentation</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp; The participant is free to use their choice of template for powerpoints.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">4.Maximum Number of slides</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	The maximum number of slides for presentation is 10.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl">
                      Note: &nbsp; Each Member of a team should possess their own event tickets.
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {codeCompGuidlines && (
            <motion.div className="fixed w-[100vw] h-[100vh] bg-gray-700 bg-opacity-45 flex justify-center items-center shadow-2xl">
              <motion.div className="w-[75vw] h-[75vh] bg-slate-900 flex flex-col py-6 px-5 overflow-y-scroll relative">
                <div className="right-5 justify-end text-3xl text-white absolute">
                  <button onClick={() => showCodeCompGuidlines()}>X</button>
                </div>
                <div className="flex flex-col font-staat text-white gap-10">
                  <div className="flex justify-center text-5xl text-[#4a8ec5]">
                    <h1>Guidlines For Coding Competition</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">1.Eligibility</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The competition is open to individuals only. Team participation is not permitted.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must register for the event within the specified deadline.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">2.Judging criteria</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Solutions will be evaluated based on correctness, efficiency, and adherence to the problem requirements.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Prizes will be awarded to the top-performing individuals based on their scores.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;In the event of a tie, the time taken to submit the final correct solution will be considered.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">3.Submission</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;All solutions must be submitted by the individual registered for the competition.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Sharing code or discussing problems with others during the competition is strictly prohibited.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">4.Completion Timeline</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must adhere to the schedule provided by the organizers.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Late arrivals may result in disqualification from certain activities or penalties.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl">
                    By participating in the coding competition, participants agree to abide by these rules and regulations. Failure to comply may result in consequences determined by the organizers.
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          <div className="pt-32 pb-6 px-6 flex flex-col gap-9 items-center">
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events4.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3 w-[65vw]">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Innovation Ideathon</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                  Unleash your creativity at Innovation Ideathon 2024! Collaborate with thinkers and problem-solvers to develop innovative solutions to real-world challenges.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>
                      <button className="w-full transition-all bg-iem_ticket_b py-2 px-3 rounded-lg hover:bg-white hover:text-iem_ticket_b" 
                      onClick={() => showIdeathonGuidlines()}
                      >See Guidlines</button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>   
                <img src="/events/codingCompetition.jpeg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3 w-[65vw]">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Coding Competition</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Showcase your coding skills in the Coding Competition! Compete with top programmers to solve complex problem. Collaborate, innovate and push the boundaries of your coding prowess in the high-energy competition.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>
                      <button className="w-full transition-all bg-iem_ticket_b py-2 px-3 rounded-lg hover:bg-white hover:text-iem_ticket_b" onClick={() => showCodeCompGuidlines()}>See Guidlines</button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events2.jpeg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3 w-[65vw]">
                <div className="text-3xl inline-block tracking-wider text-blue-500">
                  <h1>Tech talks</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Join us at tech talks for an inspiring series of discussions with leading tech innovators and industry experts. Gain insight into the latest trends, advancements and future directions in technology. Network with professionals and enthusiasts to spark new ideas and collaborations.
                  </p>
                </div>
                {/* <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Data Minning</li>
                  </ol>
                </div> */}
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events3.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3 w-[65vw]">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Ice Breaking Event - Powered by Red Bull</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Kick off the year with fun and connection at Ice Breaker, powered by Red Bull! Meet new people, play interactive games and enjoy engaging activities designed to break the ice, all while enjoying the energy boost of Red Bull.
                  </p>
                </div>
                {/* <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Unlease Creativity</li>
                    <li>Environmental Impact</li>
                  </ol>
                </div> */}
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/event1.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3 w-[65vw]">
                <div className="text-3xl text-blue-500 inline-block tracking-wider ">
                  <h1>Panel Discussion</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                  Join us for Panel Discussion, featuring industry leaders and visionaries. Dive into insightful conversations on the latest trends, innovations, and future directions across various fields. Network with like-minded professionals and fuel your ideas with expert knowledge and fresh perspectives.
                  </p>
                </div>
                {/* <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Diverse Research</li>
                    <li>Generous Prizes</li>
                    <li>Expert Judges</li>
                  </ol>
                </div> */}
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events6.jpg" className="w-64 h-52 " />
              </div>
              <div className="flex flex-col gap-3 w-[65vw]">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Cultural Celebration and Valedictory</h1>
                </div>
                <div className=" font-inter">
                  <p>
                  Celebrate diverse cultures and achievements at Cultural Celebration & Valedictory! Enjoy vibrant performances, traditional arts, and culinary delights from around the world. Conclude the event with a heartfelt valedictory ceremony, honoring outstanding contributions and memorable moments.
                  </p>
                </div>
                {/* <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Inclusivity and Unity</li>
                    <li>Lasting Memories</li>
                  </ol>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div className="flex flex-col gap-9">
          {ideathonGuidlines && (
            <motion.div className="fixed z-50 w-full h-full bg-gray-800 bg-opacity-30">
            <motion.div className="fixed w-[100vw] h-[100vh] bg-gray-700 bg-opacity-45 flex justify-center items-center shadow-2xl">
              <motion.div className="w-[75vw] h-[75vh] bg-slate-900 flex flex-col py-6 px-5 overflow-y-scroll relative">
                <div className="right-5 justify-end text-3xl text-white absolute">
                  <button onClick={() => showIdeathonGuidlines()}>X</button>
                </div>
                <div className="flex flex-col font-staat text-white gap-10">
                  <div className="flex justify-center text-center text-3xl text-[#4a8ec5]">
                    <h1>Guidlines For <br/> Ideathon</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">1.Team Foundation</h1>
                    <p className="text-xl">&nbsp; &nbsp; &nbsp; &nbsp; Teams must consist of a minimum of 1 and a maximum of 4 members, as specified by the organizers.</p>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">2.Topic</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Topic will given on the spot.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">3.Powerpoint template</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp; The participant is free to use their choice of template for powerpoints.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">4.Maximum Number of slides</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	The maximum number of slides for presentation is 10.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl">
                      Note: &nbsp; Each Member of a team should possess their own event tickets.
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            </motion.div>
          )}
          {codeCompGuidlines && (
            <motion.div className="fixed z-50 w-full h-full bg-gray-800 bg-opacity-30">
              <motion.div className="fixed w-[100vw] h-[100vh] bg-gray-700 bg-opacity-45 flex justify-center items-center shadow-2xl">
                <motion.div className="w-[75vw] h-[75vh] bg-slate-900 flex flex-col py-6 px-5 overflow-y-scroll relative">
                  <div className="right-5 justify-end text-3xl text-white absolute">
                    <button onClick={() => showCodeCompGuidlines()}>X</button>
                  </div>
                  <div className="flex flex-col font-staat text-white gap-10">
                    <div className="flex justify-center text-3xl text-[#4a8ec5] text-center">
                      <h1>Guidlines For<br/> Coding<br/> Competition</h1>
                    </div>
                    <div>
                    <h1 className="text-3xl text-[#4a8ec5]">1.Eligibility</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The competition is open to individuals only. Team participation is not permitted.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must register for the event within the specified deadline.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">2.Judging criteria</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Solutions will be evaluated based on correctness, efficiency, and adherence to the problem requirements.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Prizes will be awarded to the top-performing individuals based on their scores.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;In the event of a tie, the time taken to submit the final correct solution will be considered.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">3.Submission</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;All solutions must be submitted by the individual registered for the competition.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Sharing code or discussing problems with others during the competition is strictly prohibited.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">4.Completion Timeline</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must adhere to the schedule provided by the organizers.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Late arrivals may result in disqualification from certain activities or penalties.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl">
                    By participating in the coding competition, participants agree to abide by these rules and regulations. Failure to comply may result in consequences determined by the organizers.
                    </h4>
                  </div>
                  </div>
                </motion.div>             
              </motion.div>
            </motion.div>            
          )}
          <div className="py-32 px-9 flex flex-col gap-9">
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events4.jpg" className="w-80 h-24" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-blue-500">
                  <h1>Innovation Ideathon</h1>
                </div>
                <div className="font-serif text-sm w-56">
                  <p>
                    Unleash your creativity at Innovation Ideathon 2024! Collaborate with thinkers and problem-solvers to develop innovative solutions to real-world challenges.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 w-full ">
                    <div>
                      <button onClick={() => showIdeathonGuidlines()} className="bg-[#4a8ec5] px-3 py-2 rounded">See Guidlines</button>
                    </div>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/codingCompetition.jpeg" className="w-80 h-24" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-blue-500">
                  <h1>Coding Competition</h1>
                </div>
                <div className="font-serif text-sm w-56">
                  <p>
                  Showcase your coding skills in the Coding Competition! Compete with top programmers to solve complex problem. Collaborate, innovate and push the boundaries of your coding prowess in the high-energy competition.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5">
                    <li>
                      <button className="bg-[#4a8ec5] py-2 px-3 rounded" onClick={() => showCodeCompGuidlines()}>See Guidlines</button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events2.jpeg" className="w-80 h-24" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-blue-500">
                  <h1>Tech Talks</h1>
                </div>
                <div className="font-serif text-sm w-56">
                  <p>
                  Join us at tech talks for an inspiring series of discussions with leading tech innovators and industry experts. Gain insight into the latest trends, advancements and future directions in technology. Network with professionals and enthusiasts to spark new ideas and collaborations.
                  </p>
                </div>
                <div className="">
                {/* <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol> */}
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events3.jpg" className="w-80 h-24" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-blue-500">
                  <h1>Ice breaking event-powered by redbull</h1>
                </div>
                <div className="font-serif text-sm w-56">
                  <p>
                    Kick off the year with fun and connection at Ice Breaker, powered by Red Bull! Meet new people, play interactive games and enjoy engaging activities designed to break the ice, all while enjoying the energy boost of Red Bull.
                  </p>
                </div>
                <div className="">
                  {/* <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol> */}
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/event1.jpg" className="w-80 h-24" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-blue-500">
                  <h1>Panel Discussion</h1>
                </div>
                <div className="font-serif text-sm w-56">
                  <p>
                  Join us for Panel Discussion, featuring industry leaders and visionaries. Dive into insightful conversations on the latest trends, innovations, and future directions across various fields. Network with like-minded professionals and fuel your ideas with expert knowledge and fresh perspectives.
                  </p>
                </div>
                <div className="">
                {/* <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol> */}
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events6.jpg" className="w-80 h-24" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-blue-500">
                  <h1>Cultural Celebration and Valedictory</h1>
                </div>
                <div className="font-serif text-sm w-56">
                  <p>
                    Celebrate diverse cultures and achievements at Cultural Celebration & Valedictory! Enjoy vibrant performances, traditional arts, and culinary delights from around the world. Conclude the event with a heartfelt valedictory ceremony, honoring outstanding contributions and memorable moments.
                  </p>
                </div>
                <div className="">
                {/* <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol> */}
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </motion.div>
  );
}
