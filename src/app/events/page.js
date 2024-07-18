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
                    <h1 className="text-3xl text-[#4a8ec5]">2.Eligibility</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The ideathon is open to all college students.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must register for the event within the specified deadline.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must provide accurate information during registration.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">3.Code of Conduct</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	Participants must adhere to a code of conduct that promotes respect, inclusivity, and professionalism.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	Any form of harassment, discrimination, or inappropriate behavior will not be tolerated and may result in immediate disqualification and removal from the event premises.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">4.Intellectual Property</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	Participants must adhere to a code of conduct that promotes respect, inclusivity, and professionalism.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	Any form of harassment, discrimination, or inappropriate behavior will not be tolerated and may result in immediate disqualification and removal from the event premises.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">5.Presentation Guidelines:</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Each team must prepare a presentation to showcase their project.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Presentations must adhere to the specified time limit.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Visual aids such as slides, demos, and prototypes are encouraged.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">6.Project Requirements</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Projects must be original and developed during the ideathon duration.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants may use third-party libraries, frameworks, and APIs, provided they have appropriate licenses.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Plagiarism of code or ideas is strictly prohibited.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">7.Judging criteria</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Projects will be evaluated based on predefined criteria such as creativity, technical complexity, feasibility, and impact.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Judges' decisions are final and not subject to appeal.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">8.Equipment and Tools</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants are responsible for bringing their laptops, software, and any other necessary equipment.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Organizers may provide access to additional resources and tools as specified.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">9.Hackathon Timeline</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must adhere to the schedule provided by the organizers.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Late arrivals may result in disqualification from certain activities or penalties.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">10.Safety and Security</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must comply with all safety and security regulations provided by the venue.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants are responsible for the safety and security of their personal belongings.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">11.Disqualification</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Violation of any rules or regulations may result in immediate disqualification from the hackathon.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Disqualified teams forfeit any prizes or recognition.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">12.Organizer Discretion</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The organizers reserve the right to modify rules, regulations, or event details at their discretion.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The organizers will resolve any disputes or unforeseen circumstances.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl">
                    Before attending the event, participants must select a domain for which they will be given on the spot during the event.<br/>
                    
                    By participating in the ideathon, participants agree to abide by these rules and regulations. Failure to comply may result in consequences determined by the organizers.
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
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must provide accurate information during registration..</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">2.Participation</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Each participant must register individually.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Each participant must work independently and may not collaborate with others during the competition.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">3.Code of Conduct</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	Participants must adhere to a code of conduct that promotes respect, inclusivity, and professionalism.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;	Any form of harassment, discrimination, or inappropriate behavior will not be tolerated and may result in immediate disqualification and removal from the event premises.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp; Plagiarism of code is strictly prohibited.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">4.Judging criteria</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Solutions will be evaluated based on correctness, efficiency, and adherence to the problem requirements.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Judges' decisions are final and not subject to appeal.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Prizes will be awarded to the top-performing individuals based on their scores.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;In the event of a tie, the time taken to submit the final correct solution will be considered.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">5.Submission</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;All solutions must be submitted by the individual registered for the competition.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Sharing code or discussing problems with others during the competition is strictly prohibited.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">6.Completion Timeline</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must adhere to the schedule provided by the organizers.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Late arrivals may result in disqualification from certain activities or penalties.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">7.Technical Requirements</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must ensure they have a stable internet connection and the necessary software/tools to participate.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The competition organizers are not responsible for any technical issues faced by participants.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">8.Safety and Security</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants must comply with all safety and security regulations provided by the venue.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Participants are responsible for the safety and security of their personal belongings.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">9.Disqualification</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Violation of any rules or regulations may result in immediate disqualification from the hackathon.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Disqualified teams forfeit any prizes or recognition.</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl text-[#4a8ec5]">10.Organizer Discretion</h1>
                    <div className="text-xl">
                      <ol>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The organizers reserve the right to modify rules, regulations, or event details at their discretion.</li>
                        <li>&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;The organizers will resolve any disputes or unforeseen circumstances.</li>
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
        <div className="py-32 px-6 flex flex-col gap-9">
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
                {/* <ol className="flex gap-5 w-full ">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol> */}
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
                {/* <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol> */}
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
      )}
    </motion.div>
  );
}
