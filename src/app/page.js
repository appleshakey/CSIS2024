"use client";
import TicketCard from "@/components/TicketCard";
import TicketCardM from "@/components/TicketCardM";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Parallax, useParallax, ParallaxBanner } from "react-scroll-parallax";
import { details } from "@/components/TicketsInfo";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import Speakers from "@/components/Speakers";
import QAComponent from "@/components/QAComponent";
import SpeakerCard from "@/components/SpeakerCard";

export default function Home() {
  const isMobileScreen = useMediaQuery("(min-width: 1000px)");
  const { ref: TicketRef, inView: TicketView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    initialInView: false,
  });

  const intro = useParallax({
    scale: [2, 0],
    opacity: [2, 0],
    speed: 20,
  });

  const bg = useParallax({});

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    const EventDate = new Date("Jul 29, 2024 00:00:00").getTime();
    let event_clock = setInterval(() => {
      let now = new Date().getTime();
      let difference = EventDate - now;
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      let d1 = document.getElementById("d1");
      let d2 = document.getElementById("d2");
      let h1 = document.getElementById("h1");
      let h2 = document.getElementById("h2");
      let m1 = document.getElementById("m1");
      let m2 = document.getElementById("m2");
      let s1 = document.getElementById("s1");
      let s2 = document.getElementById("s2");
      d1
        ? (document.getElementById("d1").innerHTML = String(
            Math.floor(days / 10)
          ))
        : null;
      d2 ? (document.getElementById("d2").innerHTML = String(days % 10)) : null;
      h1
        ? (document.getElementById("h1").innerHTML = String(
            Math.floor(hours / 10)
          ))
        : null;
      h2
        ? (document.getElementById("h2").innerHTML = String(hours % 10))
        : null;
      m1
        ? (document.getElementById("m1").innerHTML = String(
            Math.floor(minutes / 10)
          ))
        : null;
      m2
        ? (document.getElementById("m2").innerHTML = String(minutes % 10))
        : null;
      s1
        ? (document.getElementById("s1").innerHTML = String(
            Math.floor(seconds / 10)
          ))
        : null;
      s2
        ? (document.getElementById("s2").innerHTML = String(seconds % 10))
        : null;
    }, 1000);
  }, []);

  return (
    <div>
      {isMobileScreen ? (
        <motion.div className="flex flex-col gap-28 px-[82px]">
          <div>
            <div
              className="h-[100vh] flex justify-center items-center"
              ref={bg.ref}
            >
              <div
                className="bg-ieee bg-fixed h-[75vh] w-[100vw] flex justify-center items-center"
                ref={bg.ref}
              >
                <div
                  className={`px-[82px] text-white font-staat flex justify-center items-center`}
                  ref={intro.ref}
                >
                  <div className="  flex flex-col text-center gap-y-8">
                    <div className="flex flex-col">
                      <h1 className="text-4xl inline-block tracking-wider ">
                        SRM Institute of Science And Technology in association
                        with IEEE Computer Society
                      </h1>
                    </div>
                    <p className="text-4xl tracking-wider">PRESENTS</p>
                    <div className="flex flex-col">
                      <h1 className="text-7xl inline-block bg-gradient-to-br from-[#ffffff] to-[#42a5f5]  bg-clip-text text-transparent tracking-wider">
                        Computer Society
                      </h1>
                      <h1 className="text-7xl inline-block bg-gradient-to-br from-[#ffffff] to-[#42a5f5]  bg-clip-text text-transparent tracking-wider">
                        INDIA SYMPOSIUM 2024
                      </h1>
                    </div>
                    <p className="text-4xl tracking-wider">
                      REDEFINING ENDLESS POSSIBILITES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-white bg-black py-9 px-12 flex flex-col gap-16">
            <h1 className="text-7xl font-staat bg-gradient-to-r from-[#4a8ec5] via-[#1666ac] to-[#bcbcbc] inline-block bg-clip-text text-transparent ">
              THE MOST Awaited IEEE EVENT IS HERE!
            </h1>
            <div className="grid grid-cols-2 font-staat gap-9">
              <div className="px-5 flex flex-col gap-3">
                <h1 className="text-4xl tracking-wider">
                  Redefining Endless Possibilities :
                </h1>
                <p className="text-xl mt-8 tracking-wider font-inter">
                  Join us for the prestigious Computer Society India Symposium
                  (CSIS) at SRM Institute of Science & Technology. Discover a
                  captivating blend of technical expertise, engaging activities,
                  and networking opportunities. CSIS 2024 promises a vibrant
                  learning environment that fosters innovation, collaboration,
                  and professional growth.
                </p>
              </div>
              <div className="grid grid-cols-10 grid-rows-10 gap-2">
                <div className="bg-black text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-4">
                  <ParallaxBanner
                    layers={[{ image: "/banner1.jpg", speed: -15 }]}
                    className="aspect-[2.5/2.1] hover:scale-105 transition-all hover:z-40"
                  />
                </div>
                <div className="bg-black text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-4">
                  <ParallaxBanner
                    layers={[{ image: "/banner2.jpg", speed: -15 }]}
                    className="aspect-[2.5/2.1] hover:scale-105 transition-all hover:z-40"
                  />
                </div>
                <div className="bg-black text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-4">
                  <ParallaxBanner
                    layers={[{ image: "/banner3.jpg", speed: -15 }]}
                    className="aspect-[2.5/2.1] hover:scale-105 transition-all hover:z-40"
                  />
                </div>
                <div className="bg-white text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-4">
                  <ParallaxBanner
                    layers={[{ image: "/banner4.jpg", speed: -15 }]}
                    className="aspect-[2.5/2.2] hover:scale-105 transition-all hover:z-40"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black h-[50vh] text-white font-staat p-5 flex flex-col gap-3">
            <div className="flex justify-center text-7xl pb-16">
              <h1>
                Event <span className="text-[#ff0000]">timer</span>
              </h1>
            </div>
            <div className="flex justify-around">
              <div className="grid grid-cols-2 gap-2">
                <div className="cell-holder">
                  <div className="cell" id="d1"></div>
                </div>
                <div className="cell-holder">
                  <div className="cell" id="d2"></div>
                </div>
              </div>
              <div className="cell-divide">:</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="cell-holder">
                  <div className="cell" id="h1"></div>
                </div>
                <div className="cell-holder">
                  <div className="cell" id="h2"></div>
                </div>
              </div>
              <div className="cell-divide">:</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="cell-holder">
                  <div className="cell" id="m1"></div>
                </div>
                <div className="cell-holder">
                  <div className="cell" id="m2"></div>
                </div>
              </div>
              <div className="cell-divide">:</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="cell-holder">
                  <div className="cell" id="s1"></div>
                </div>
                <div className="cell-holder">
                  <div className="cell" id="s2"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <motion.div className="bg-black text-white font-staat p-5 flex flex-col gap-5" ref={TicketRef}>
        <div className="text-center text-7xl pb-16">
          <h1>Buy Tickets</h1>
        </div>
        <motion.div className="grid grid-cols-5 gap-3" animate={TicketView ? "visible" : "hidden"} variants={container}>
          <motion.div className="bg-gradient-to-t from-spl_ticket_b to-spl_ticket_t rounded-lg"  variants={variants}>
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </motion.div>
          <motion.div className="bg-gradient-to-t from-cwk_ticket_b to-cwk_ticket_t rounded-lg" variants={variants}>
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </motion.div>
          <motion.div className="bg-gradient-to-t from-iec_ticket_b to-iec_ticket_t rounded-lg" variants={variants}>
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </motion.div>
          <motion.div className="bg-gradient-to-t from-iem_ticket_b to-iem_ticket_t rounded-lg" variants={variants}>
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </motion.div>
          <motion.div className="bg-gradient-to-t from-nim_ticket_b to-nim_ticket_t rounded-lg" variants={variants}>
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </motion.div>
        </motion.div>
      </motion.div> */}
          {/* <div className="flex flex-col text-white font-staat items-center gap-7 p-8">
        <div className="text-7xl pb-16">
          <h1>APPLY FOR SELECTED EVENTS</h1>
        </div>
        <div className="grid grid-cols-2 h-48 gap-5">
          <div className="bg-gradient-to-t from-[#1c7fd6] to-[#1a4466] flex flex-col text-white font-staat text-center gap-8 p-5 rounded-lg">
            <div className="text-3xl">
              <h2>Paper Presentation Ticket</h2>
            </div>
            <div className="text-md">
              <p>Students who wish to apply only for Paper</p>
              <p>Presentation Event</p>
              <p>Cash prize for winners and goodies for participants</p>
            </div>
            <div className="text-3xl">
              <h1>RS.249</h1>
            </div>
            <div className="px-10">
              <button className="w-full bg-gradient-to-r from-[#1c7fd6] to-[#1a4466] rounded-lg">Register Now</button>
            </div>
          </div>
          <div className="bg-gradient-to-t from-[#1c7fd6] to-[#1a4466] flex flex-col text-white font-staat text-center gap-8 p-5 rounded-lg">
            <div className="text-3xl">
              <h2>E-Waste ExtraVagenza Ticket</h2>
            </div>
            <div className="text-md">
              <p>Students who wish to apply only for Paper</p>
              <p>ExtraVagenza event</p>
              <p>Cash prize for winners and goodies for participants</p>
            </div>
            <div className="text-3xl">
              <h1>RS.249</h1>
            </div>
            <div className="px-10">
              <button className="w-full bg-gradient-to-r from-[#1c7fd6] to-[#1a4466] rounded-lg">Register Now</button>
            </div>
          </div>
        </div>
      </div> */}
          <motion.div className="text-white font-staat flex flex-col items-center mt-10">
            <div className="text-7xl pb-16">
              <h1>
                Event <span className="text-[#1b85b5]">Partners</span>
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-28">
              <motion.div
                animate={{
                  x: [-100, 0, 0, 100],
                  opacity: [0, 1, 1, 0],
                  scale: [1.5, 1.5, 1.5, 1.5],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="flex justify-center items-center"
              >
                <img
                  src="https://ieeecs-media.computer.org/wp-media/2018/04/27230619/cropped-cs-favicon-512x512.png"
                  className="h-40"
                />
              </motion.div>
              <motion.div
                animate={{ x: [-100, 0, 0, 100], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="flex justify-center items-center"
              >
                <img src="./srm-logo.png" className="" />
              </motion.div>
              <motion.div
                animate={{ x: [-100, 0, 0, 100], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="flex justify-center items-center"
              >
                <img src="./event-patner.png" className="h-40"/>
              </motion.div>
            </div>
          </motion.div>
          {/* <div className="flex flex-col items-center gap-7">
        <div className="text-7xl font-staat text-white pb-16">
          Our <span className="text-[#22c55e]">Sponsors</span>
        </div>
        <div className="grid grid-cols-5">
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
        </div>
      </div> */}
          <div className="flex flex-col items-center text-white font-staat gap-7">
            <div className="text-7xl pb-16">
              <h1>
                Why <span className="text-[#ff8066]">CSIS ?</span>
              </h1>
            </div>
            <div className="flex justify-between lg:space-x-24">
              <div className="flex flex-col gap-5 items-center text-center">
                <div>
                  <img src="/whyCsis/leftbanner.jpg" className="w-64" />
                </div>
                <div className="text-4xl py-4 tracking-wider">
                  <h3>
                    Expand Your{" "}
                    <span className="text-[#156693]">Knowledge</span>
                  </h3>
                </div>
                <div className="text-sm">
                  <p className="text-xl font-inter">
                    CSIS 2024 offers a unique opportunity to expand your
                    knowledge and stay updated on the latest advancements in the
                    field of computer science. Engage with industry experts,
                    attend insightful talks and workshops, and gain valuable
                    insights that will enhance your understanding of
                    cutting-edge technologies and trends.
                  </p>
                </div>
              </div>
              {/* <div className="absolute left-72 flex items-end h-[30vh] -z-10">
            <img src="/whyCsis/Vector3.png" className="w-[23vw]" />
          </div> */}
              <div className="flex flex-col gap-5 items-center text-center">
                <div>
                  <img src="/whyCsis/middlebanner.png" className="w-64" />
                </div>
                <div className="text-4xl py-4 tracking-wider">
                  <h3>
                    Increase Your{" "}
                    <span className="text-[#156693]">Network</span>{" "}
                  </h3>
                </div>
                <div className="text-sm">
                  <p className="text-xl font-inter">
                    Connect with influential industry leaders, researchers, and
                    professionals from diverse backgrounds at CSIS 2024. Forge
                    valuable connections, exchange ideas, and build a strong
                    professional network that can open doors to new career
                    opportunities, collaborations, and mentorship.
                  </p>
                </div>
              </div>
              {/* <div className="absolute right-72 -z-10 flex items-center h-[25vh]">
            <img src="/whyCsis/Vector4.png" className="w-[25vw]"/>
          </div> */}
              <div className="flex flex-col gap-5 items-center text-center">
                <div>
                  <img src="/whyCsis/rightbanner.png" className="w-64" />
                </div>
                <div className="text-4xl py-4 tracking-wider">
                  <h3>
                    Expand Your{" "}
                    <span className="text-[#156693]">Knowledge</span>
                  </h3>
                </div>
                <div>
                  <p className="text-xl font-inter">
                    CSIS 2024 offers a unique opportunity to expand your
                    knowledge and stay updated on the latest advancements in the
                    field of computer science. Engage with industry experts,
                    attend insightful talks and workshops, and gain valuable
                    insights that will enhance your understanding of
                    cutting-edge technologies and trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-7">
            <div className="text-7xl font-staat text-white pb-16">
              RENOWNED <span className="text-[#bcff1f]">SPEAKERS</span>
            </div>
            <div className="grid grid-cols-3 gap-8 xl:gap-32">
              <SpeakerCard
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
                heading="  Nikky Kumar Jha"
                para="Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields."
                image="/speakers3.jpg"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div className="flex flex-col gap-16">
          <div ref={intro.ref} className="hidden"></div>
          <div ref={bg.ref} className="hidden"></div>
          <div className="intro-m">
            <motion.div className="h-[95vh] w-[100vw] flex flex-col justify-center items-center bg-ieee">
              <motion.div className="w-[100vw] flex flex-col items-center gap-7 p-1">
                <motion.div className="text-3xl font-staat text-center text-white flex flex-col items-center">
                  <motion.div className="text-3xl font-staat text-center inline-block text-white ">
                    SRMIST x IEEECS
                  </motion.div>
                  PRESENTS
                </motion.div>
                <motion.div className="text-5xl font-staat text-center inline-block bg-gradient-to-br from-[#ffffff] to-[#42a5f5]  bg-clip-text text-transparent">
                  CSIS 2024
                </motion.div>
                <motion.div className="text-3xl font-staat text-center text-white">
                  Redefining endless posibilites
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="flex justify-center p-3">
              <button className="text-white font-staat bg-iem_ticket_b p-2 rounded-lg">
                REGISTER NOW
              </button>
            </div>
          </div>
          <div className="p-3 description-m">
            <div className="flex flex-col gap-8">
              <div className="text-3xl inline-block font-staat text-transparent bg-clip-text text-center bg-gradient-to-br from-[#4a8ec5] via-[#1666ac] to-[#000000]">
                <h1>The Most Awaited Event is Here!</h1>
              </div>
              <div className="flex flex-col gap-5 text-white font-staat text-center text-lg">
                <h1>Redefining Endless Posibilites</h1>
                <p className="font-inter">
                  Join us for the prestigious Computer Society India Symposium
                  (CSIS) at SRM Institute of Science & Technology. Discover a
                  captivating blend of technical expertise, engaging activities,
                  and networking opportunities. CSIS 2024 promises a vibrant
                  learning environment that fosters innovation, collaboration,
                  and professional growth.
                </p>
              </div>
              {/* <div className="flex justify-center">
                <div className="h-56 w-52 bg-gray-400 rounded-lg"></div>
              </div> */}
            </div>
          </div>

          <div className="timer flex flex-col gap-5 items-center">
            <div className="text-white font-staat text-3xl py-4">
              <h1>
                Event <span className="text-[#ff0000]">timer</span>
              </h1>
            </div>
            <div className="flex text-white font-staat gap-2 text-3xl">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="d1">1</h3>
                </div>
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="d2">2</h3>
                </div>
              </div>
              <div className="text-white font-staat text-2xl">
                <h1>:</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="h1">1</h3>
                </div>
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="h2">2</h3>
                </div>
              </div>
              <div className="text-white font-staat text-2xl">
                <h1>:</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="m1">1</h3>
                </div>
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="m2">2</h3>
                </div>
              </div>
              <div className="text-white font-staat text-2xl">
                <h1>:</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="s1">1</h3>
                </div>
                <div className="bg-gray-400 rounded-lg w-5 flex justify-center items-center">
                  <h3 id="s2">2</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="tickets flex flex-col items-center">
        <div className="text-3xl text-white font-staat">
          <h1>Buy Tickets</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 p-5 text-white font-staat">
          <div className="bg-gradient-to-t from-spl_ticket_b to-spl_ticket_t rounded-lg">
            <TicketCardM title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} price={details[0].price} availability={details[0].price} />
          </div>
          <div className="bg-gradient-to-t from-cwk_ticket_b to-cwk_ticket_t rounded-lg">
            <TicketCardM title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} price={details[0].price} availability={details[0].price} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 p-5 text-white font-staat">
          <div className="bg-gradient-to-t from-iec_ticket_b to-iec_ticket_t rounded-lg">
            <TicketCardM title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} price={details[0].price} availability={details[0].price} />
          </div>
          <div className="bg-gradient-to-t from-iem_ticket_b to-iem_ticket_t rounded-lg">
            <TicketCardM title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} price={details[0].price} availability={details[0].price} />
          </div>
        </div>
        <div className="flex justify-center font-staat text-white ">
            <div className="bg-gradient-to-t from-nim_ticket_b to-nim_ticket_t rounded-lg m-5">
              <TicketCardM title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} price={details[0].price} availability={details[0].price} />
            </div>
        </div>
      </div> */}
          {/* <div className="ApplyForSelected Events flex flex-col items-center px-5 gap-3">
        <div className="text-3xl text-white font-staat">
          <h1>Apply For Selected Events</h1>
        </div>
       <div className="flex flex-cols items-center bg-gradient-to-t from-iem_ticket_b to-iem_ticket_t rounded-lg">
          <div className="f lex flex-col text-white px-12 py-5 items-center text-center font-staat gap-3">
              <div className="text-xl">
                <h1>Paper Presentation Ticket</h1>
              </div>
              <div>
                <p>Students who wish to apply only for Paper presentation event </p>
                <p>Cash prize for winners and goodies for participants.</p>
              </div>
              <div className="text-2xl">
                <h1>RS.249</h1>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-iem_ticket_b to-iem_ticket_t px-5 py-2">
                Register Now
              </div>
          </div>
        </div>
        <div className="flex flex-cols items-center bg-gradient-to-t from-iem_ticket_b to-iem_ticket_t rounded-lg">
          <div className="f lex flex-col text-white px-12 py-5 items-center text-center font-staat gap-3">
              <div className="text-xl">
                <h1>e-waste extravaganza ticket</h1>
              </div>
              <div>
                <p>Students who wish to apply only for Paper presentation event </p>
                <p>Cash prize for winners and goodies for participants.</p>
              </div>
              <div className="text-2xl">
                <h1>RS.249</h1>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-iem_ticket_b to-iem_ticket_t px-5 py-2">
                Register Now
              </div>
          </div>
        </div>
      </div> */}
          <div className="ourEventPartners flex flex-col gap-3">
            <div className="text-3xl text-white font-staat flex justify-center py-4">
              <h1>
                Event <span className="text-[#1b85b5] py-4">Partners</span>
              </h1>
            </div>
            <div className="flex flex-col space-y-8 items-center">
              <img
                src="https://ieeecs-media.computer.org/wp-media/2018/04/27230619/cropped-cs-favicon-512x512.png"
                className="h-20"
              />
              <img src="./srm-logo.png" className="h-20" />
              <img src="./event-patner.png" className="h-20" />
            </div>
          </div>
          {/* <div className="OurEventSponsors flex flex-col gap-3">
        <div className="text-3xl text-white font-staat flex justify-center">
          <h1>Our Partners</h1>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="placeholdericon.svg" className="w-28 h-28"/>
          <img src="placeholdericon.svg" className="w-28 h-28"/>
          <img src="placeholdericon.svg" className="w-28 h-28"/>
        </div>
      </div> */}
          <div className="whyCSIS flex flex-col items-center gap-7 p-5">
            <div className="text-center text-white font-staat text-3xl">
              <h1>
                Why <span className="text-[#ff8066]">CSIS</span> 2024 ?
              </h1>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div>
                <img src="/whyCsis/leftbanner.jpg" className=" w-28 h-28" />
              </div>
              <div className="text-white font-staat text-xl">
                <h3>
                  Expand Your <span className="text-[#156693]">Knowledge</span>
                </h3>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                  CSIS 2024 offers a unique opportunity to expand your knowledge
                  and stay updated on the latest advancements in the field of
                  computer science. Engage with industry experts, attend
                  insightful talks and workshops, and gain valuable insights
                  that will enhance your understanding of cutting-edge
                  technologies and trends.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div>
                <img src="/whyCsis/middlebanner.png" className=" w-28 h-28" />
              </div>
              <div className="text-white font-staat text-xl">
                <h3>
                  Increase Your <span className="text-[#156693]">Network</span>{" "}
                </h3>
              </div>
              <div className="text-white text-md text-center font-inter">
                <p>
                  CSIS 2024 offers a unique opportunity to expand your knowledge
                  and stay updated on the latest advancements in the field of
                  computer science. Engage with industry experts, attend
                  insightful talks and workshops, and gain valuable insights
                  that will enhance your understanding of cutting-edge
                  technologies and trends.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div>
                <img src="/whyCsis/rightbanner.png" className=" w-28 h-28" />
              </div>
              <div className="text-white font-staat text-xl">
                <h3>
                  Expand Your <span className="text-[#156693]">Knowledge</span>
                </h3>
              </div>
              <div className="text-white font-staat text-md text-center">
                <p className="font-inter">
                  CSIS 2024 offers a unique opportunity to expand your knowledge
                  and stay updated on the latest advancements in the field of
                  computer science. Engage with industry experts, attend
                  insightful talks and workshops, and gain valuable insights
                  that will enhance your understanding of cutting-edge
                  technologies and trends.
                </p>
              </div>
            </div>
          </div>
          <div className="renownedSpeakers flex flex-col items-center p-5 gap-7">
            <div className="text-white font-staat text-3xl">
                 <div className="font-staat text-white">
              RENOWNED <span className="text-[#bcff1f]">SPEAKERS</span>
            </div>
            </div>
            <div className="flex gap-5 overflow-y-auto w-[75%] h-[120%]">
              <Speakers  heading="Saptarshi Ghosh"
                para="President of Students & Young Professionals at IEEE Computer Society.Leading strategic activities and initiatives for the world's largest organisation related to Computer Science. ASIC Design Engineer (SoC) at Intel Corporation, driving best-in-class performance for Intel Xeon Memory Controllers, aligning IP with CEO's IDM2.0 Strategy. based in Santa Clara County, California, United States, and San Francisco Bay Area."
                image="/speakers1.jpg"/>
              <Speakers  heading="Shivam Abhilash"
                para="  Experienced technology leader with a demonstrated history of
                    working in the management consulting industry. Skilled in
                    Machine Learning, NLP, Graph, Production ready ML Solutions,
                    Leadership, Management and Solution Delivery. Strong
                    business development professional graduated from Indian
                    Institute Of Information Technology having knowledge of Data
                    Analytics."
                image="/speakers2.jpg" />
              <Speakers heading="  Nikky Kumar Jha"
                para="Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields."
                image="/speakers3.jpg" />
              
            </div>
          </div>
          <div className="FAQ flex flex-col p-5 gap-7">
            <div className="flex justify-center text-3xl font-staat text-white">
              <h1>FAQs</h1>
            </div>
            <div className="flex flex-col gap-7">
              <QAComponent />
              <QAComponent />
              <QAComponent />
              <QAComponent />
              <QAComponent />
              <QAComponent />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
