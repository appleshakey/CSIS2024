"use client";
import SpeakerCard from "@/components/SpeakerCard";
import { useMediaQuery } from "@mui/material";
export default function Speakers() {
const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      {isNonMobileScreen ? (
        <div>
          <div className="pt-32 px-[82px] flex flex-col gap-28">
            <div className="flex flex-col items-center gap-7">
              {/* <div className="advisors flex flex-col items-center gap-11"> */}
              <div className="text-nim_ticket_b font-staat text-5xl">
                <h1>SPEAKERS</h1>
              </div>
              <div className="grid grid-cols-4 gap-8 xl:gap-32">
              <SpeakerCard
                  heading="Sandeep Varma"
                  para="Sandeep is a thought leader and chief architect of multiple large-scale enterprise big data platforms, and he heads all delivery from ZS’s big data center of excellence in India. He specializes in rapidly building high-performance teams focused on cutting-edge technologies and high-quality delivery.He did MBA in marketing and systems from BIM Trichy and a bachelor’s in mechanical engineering from Bengaluru University."
                  image="/speakers4.jpeg"
                />
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
              {/* </div> */}
            </div>

            {/*<div className="flex flex-col items-center gap-7">
            <div className="text-7xl font-staat text-white pb-16">
              RENOWNED <span className="text-[#bcff1f]">SPEAKERS</span>
            </div>
            <div className="grid grid-cols-3 gap-8 xl:gap-32 ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-[#0070a9] group">
                <img
                  className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src="/speakers1.jpg"
                  alt="Sunset in the mountains"
                />
                <div className=" py-4 tracking-wider mx-4">
                  <div className="text-3xl py-4 tracking-wider font-staat mb-2 text-white  ">
                    Saptarshi Ghosh
                  </div>
                  <p className="text-white  font-inter text-xl">
                  President of Students & Young Professionals at IEEE Computer Society.Leading strategic activities and initiatives for the world's largest organisation related to Computer Science. ASIC Design Engineer (SoC) at Intel Corporation, driving best-in-class performance for Intel Xeon Memory Controllers, aligning IP with CEO's IDM2.0 Strategy. based in Santa Clara County, California, United States, and San Francisco Bay Area.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-[#0070a9] group">
                <img
                  className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src="/speakers2.jpg"
                  alt="Sunset in the mountains"
                />
                <div className=" py-4 tracking-wider mx-4">
                  <div className="text-3xl py-4 tracking-wider font-staat  mb-2 text-white">
                    Shivam Abhilash
                  </div>
                  <p className="text-white  font-inter text-xl">
                    Experienced technology leader with a demonstrated history of
                    working in the management consulting industry. Skilled in
                    Machine Learning, NLP, Graph, Production ready ML Solutions,
                    Leadership, Management and Solution Delivery. Strong
                    business development professional graduated from Indian
                    Institute Of Information Technology having knowledge of Data
                    Analytics.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-[#0070a9] group">
                <img
                  className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src="/speakers3.jpg"
                  alt="Sunset in the mountains"
                />
                <div className=" py-4 tracking-wider mx-4">
                  <div className="text-3xl py-4 tracking-wider font-staat  mb-2 text-white">
                    Nikky Kumar Jha
                  </div>
                  <p className="text-white  font-inter text-xl">
                  Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

            {/* <div className="advisors flex flex-col items-center gap-11">
                    <div className="text-nim_ticket_b font-staat text-5xl">
                        <h1>Advisors</h1>
                    </div>
                    <div className="grid grid-flow-row grid-cols-4 gap-5">
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-nim_ticket_b font-staat text-5xl">
                        Web Development
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-nim_ticket_b font-staat text-5xl">
                        Corporate
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-nim_ticket_b font-staat text-5xl">
                        Documentation
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-nim_ticket_b font-staat text-5xl">
                        Publicity
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="pt-32 flex flex-col gap-28">
            <div className="advisors flex flex-col items-center gap-11">
              <div className="text-nim_ticket_b font-staat text-2xl">
                <h1>Advisors</h1>
              </div>
              <div className="px-4 space-y-4">
              <SpeakerCard
                  heading="Sandeep Varma"
                  para="Sandeep is a thought leader and chief architect of multiple large-scale enterprise big data platforms, and he heads all delivery from ZS’s big data center of excellence in India. He specializes in rapidly building high-performance teams focused on cutting-edge technologies and high-quality delivery."
                  image="/speakers4.jpeg"
                />
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
              
                {/* <SpeakerCard /> */}
              </div>
              {/* <div className="advisors flex flex-col items-center gap-11">
                <div className="text-nim_ticket_b font-staat text-2xl">
                  <h1>Advisors</h1>
                </div>
                <div className="grid grid-flow-row grid-cols-2 gap-3">
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                  <SpeakerCard />
                </div>
              </div>
              <div className="flex flex-col webdev items-center gap-7">
                <div className="text-nim_ticket_b font-staat text-5xl">
                  Web Development
                </div>
                <div className="text-2xl text-white font-staat flex gap-7">
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                </div>
              </div>
              <div className="flex flex-col webdev items-center gap-7">
                <div className="text-nim_ticket_b font-staat text-5xl">
                  Corporate
                </div>
                <div className="text-2xl text-white font-staat flex gap-7">
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                </div>
              </div>
              <div className="flex flex-col webdev items-center gap-7">
                <div className="text-nim_ticket_b font-staat text-5xl">
                  Documentation
                </div>
                <div className="text-2xl text-white font-staat flex gap-7">
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                </div>
              </div>
              <div className="flex flex-col webdev items-center gap-7">
                <div className="text-nim_ticket_b font-staat text-5xl">
                  Publicity
                </div>
                <div className="text-2xl text-white font-staat flex gap-7">
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                  <h1>Adarsh</h1>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
