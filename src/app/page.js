"use client";
import TicketCard from "@/components/TicketCard";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Parallax, useParallax, ParallaxBanner } from "react-scroll-parallax";
import { details } from "@/components/TicketsInfo";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {

    // const {ref, inView} = useInView({triggerOnce: true, threshold: 0.5, initialInView: false})


  const intro = useParallax({
    scale: [2, 0],
    opacity:[2, 0],
    speed: 20
  })

 


  const bg = useParallax({
    
  })




  useEffect(() => {
    const EventDate = new Date("Jun 29, 2024 00:00:00").getTime();
    let event_clock = setInterval(() => {
      let now = new Date().getTime();
      let difference = EventDate - now;
      let days = Math.floor(difference/(1000*60*60*24));
      let hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));
      let minutes = Math.floor((difference%(1000*60*60))/(1000*60));
      let seconds = Math.floor((difference % (1000*60))/1000);
      document.getElementById("d1").innerHTML = String(Math.floor(days/10));
      document.getElementById("d2").innerHTML = String(days%10);
      document.getElementById("h1").innerHTML = String(Math.floor(hours/10));
      document.getElementById("h2").innerHTML = String(hours%10);
      document.getElementById("m1").innerHTML = String(Math.floor(minutes/10));
      document.getElementById("m2").innerHTML = String(minutes%10);
      document.getElementById("s1").innerHTML = String(Math.floor(seconds/10));
      document.getElementById("s2").innerHTML = String(seconds%10);
    }, 1000);
  }, [])

  return (
    <motion.div className=" h-[700vh] flex flex-col gap-28 px-[82px]">
      <div>
        <div className="h-[100vh] flex justify-center items-center" ref={bg.ref}>
          <div className="bg-ieee bg-fixed h-[75vh] w-[100vw] flex justify-center items-center" ref={bg.ref}>
            <div className={`px-[82px] text-white font-staat flex justify-center items-center`} ref={intro.ref}>
              <div className="  flex flex-col text-center">
                <p className="text-3xl">PRESENTS</p>
                <div className="flex flex-col">
                  <h1 className="text-8xl inline-block bg-gradient-to-br from-[#ffffff] to-[#42a5f5]  bg-clip-text text-transparent">COMPUTER SOCIETY</h1>
                  <h1 className="text-8xl inline-block bg-gradient-to-br from-[#ffffff] to-[#42a5f5]  bg-clip-text text-transparent">INDIA SYMPOSIUM 2024</h1>
                </div>
                <p className="text-3xl">REDEFINING ENDLESS POSSIBILITES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white bg-black py-9 px-12 flex flex-col gap-16">
        <h1 className="text-7xl font-staat bg-gradient-to-r from-[#4a8ec5] via-[#1666ac] to-[#bcbcbc] inline-block bg-clip-text text-transparent">THE MOST AWAITED IEEE EVENT IS HERE!</h1>
        <div className="grid grid-cols-2 font-staat gap-9">
          <div className="px-5 flex flex-col gap-3">
            <h1 className="text-5xl">Redefining Endless Possibilities :</h1>
            <p className="text-2xl">Join us for the prestigious Computer Society India Symposium (CSIS) at SRM Institute of Science & Technology. Discover a captivating blend of technical expertise, engaging activities, and networking opportunities. CSIS 2024 promises a vibrant learning environment that fosters innovation, collaboration, and professional growth.</p>
          </div>
          <div className="grid grid-cols-10 grid-rows-10 gap-2">
            <div className="bg-black text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-5">
              <ParallaxBanner layers={[{ image: '/banner1.jpg', speed: -15,}]}  className="aspect-[2.5/2.1] hover:scale-105 transition-all hover:z-40"/>
            </div>
            <div className="bg-black text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-4">
              <ParallaxBanner layers={[{ image: '/banner2.jpg', speed: -15}]} className="aspect-[3/2.15] hover:scale-105 transition-all hover:z-40"/>
            </div>
            <div className="bg-black text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-6">
              <ParallaxBanner layers={[{ image: '/banner3.jpg', speed: -15}]} className="aspect-[4/2.8] hover:scale-105 transition-all hover:z-40"/>
            </div>
            <div className="bg-white text-black grid-cols-subgrid col-span-5 grid-rows-subgrid row-span-5">               
            <ParallaxBanner layers={[{ image: '/banner4.jpg', speed: -15}]} className="aspect-[3/2.5] hover:scale-105 transition-all hover:z-40"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[50vh] text-white font-staat p-5 flex flex-col gap-3">
        <div className="flex justify-center text-4xl">
          <h1>Event timer</h1>
        </div>
        <div className="flex justify-around">
          <div className="grid grid-cols-2 gap-2">
            <div className="cell-holder">
              <div className="cell" id="d1">
                    
              </div>
            </div>
            <div className="cell-holder">
              <div className="cell" id="d2">

              </div>
            </div>
          </div>
          <div className="cell-divide">
            :
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="cell-holder">
              <div className="cell" id="h1">
                    
              </div>
            </div>
            <div className="cell-holder">
              <div className="cell" id="h2">

              </div>
            </div>
          </div>
          <div className="cell-divide">
            :
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="cell-holder">
              <div className="cell" id="m1">

              </div>
            </div>
            <div className="cell-holder">
              <div className="cell" id="m2">

              </div>
            </div>
          </div>
          <div className="cell-divide">
            :
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="cell-holder">
              <div className="cell" id="s1">

              </div>
            </div>
            <div className="cell-holder">
              <div className="cell" id="s2">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-staat p-5 flex flex-col gap-5">
        <div className="text-center text-3xl">
          <h1>Buy Tickets</h1>
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-gradient-to-t from-spl_ticket_b to-spl_ticket_t rounded-lg" >
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </div>
          <div className="bg-gradient-to-t from-cwk_ticket_b to-cwk_ticket_t rounded-lg" >
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </div>
          <div className="bg-gradient-to-t from-iec_ticket_b to-iec_ticket_t rounded-lg" >
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </div>
          <div className="bg-gradient-to-t from-iem_ticket_b to-iem_ticket_t rounded-lg" >
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </div>
          <div className="bg-gradient-to-t from-nim_ticket_b to-nim_ticket_t rounded-lg" >
            <TicketCard title={details[0].title} eligibility={details[0].eligibility} includes={details[0].includes} 
                  price={details[0].price} availability={details[0].price} />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white font-staat items-center gap-7 p-8">
        <div className="text-3xl">
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
      </div>
      <div className="text-white font-staat flex flex-col items-center mt-10">
        <div className="text-3xl">
          <h1>Event Partners</h1>
        </div>
        <div className="grid grid-cols-3 gap-28">
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
          <div className="relative scale-150">
            <img src="./placeholdericon.svg" className="relative top-7"/>
          </div>
          <div>
            <img src="./placeholdericon.svg"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-7">
        <div className="text-3xl font-staat text-white">
          Our Sponsors
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
      </div>
      <div className="flex flex-col items-center text-white font-staat gap-7">
        <div className="text-3xl">
          <h1>Why CSIS?</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 items-center text-center">
            <div>
              <img src="/whyCsis/leftbanner.jpg"/>
            </div>
            <div className="text-2xl">
              <h3>Expand Your Knowledge</h3>
            </div>
            <div className="text-sm">
              <p>
                CSIS 2024 offers a unique opportunity to expand your knowledge and stay updated on 
                the latest advancements in the field of computer science. 
                Engage with industry experts, attend insightful talks and workshops, 
                and gain valuable insights that will enhance your understanding of cutting-edge 
                technologies and trends.
              </p>
            </div>
          </div>
          <div className="absolute left-72 flex items-end h-[30vh] -z-10">
            <img src="/whyCsis/Vector3.png" className="w-[23vw]" />
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div>
              <img src="/whyCsis/middlebanner.png"/>
            </div>
            <div className="text-2xl">
              <h3>Increase Your Network</h3>
            </div>
            <div className="text-sm">
              <p>
                Connect with influential industry leaders, researchers, and professionals 
                from diverse backgrounds at CSIS 2024. Forge valuable connections, exchange ideas, 
                and build a strong professional network that can open doors to new career opportunities, 
                collaborations, and mentorship.
              </p>
            </div>
          </div>
          <div className="absolute right-72 -z-10 flex items-center h-[25vh]">
            <img src="/whyCsis/Vector4.png" className="w-[25vw]"/>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div>
              <img src="/whyCsis/rightbanner.png"/>
            </div>
            <div className="text-2xl">
              <h3>Expand Your Knowledge</h3>
            </div>
            <div>
              <p className="text-sm">
                CSIS 2024 offers a unique opportunity to expand your knowledge and stay updated 
                on the latest advancements in the field of computer science. Engage with industry experts, 
                attend insightful talks and workshops, and gain valuable insights that will enhance your 
                understanding of cutting-edge technologies and trends.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 gap-2">
        <div className="flex flex-col gap-9 text-white font-staat justify-center border-r-4 border-white">
          <div className="text-4xl font-extrabold">
            <h1>Contact</h1>
          </div>
          <div>
            <h4>contact number</h4>
          </div>
          <div>
            <h4>gmail-ID</h4>
          </div>
          <div>
            <input placeholder="Enter Your gmail ID" type="text" className="p-3 rounded-lg w-56 bg-gray-900"/>
          </div>
        </div>
        <div className="flex justify-end px-5">
          <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1GQhhjWXiXDQlDoGPjX9DqLhk-lD2mrY&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
      </div>
    </motion.div>
  );
}
