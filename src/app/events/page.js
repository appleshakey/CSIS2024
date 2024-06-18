"use client";
import { useMediaQuery } from "@mui/material";
export default function Event() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      {isNonMobileScreen ? (
        <div>
          <div className="py-32 px-6 flex flex-col gap-9 items-center">
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/event1.png" className="w-56 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Engaging Panel Discussions</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through insightful panel discussions with industry
                    experts.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/event2.png" className="w-56 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Inspiring expert talks</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through insightful panel discussions with industry
                    experts.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/event3.png" className="w-56 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider text-blue-500">
                  <h1>Hands on workshop</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through insightful panel discussions with industry
                    experts.
                  </p>
                </div>
           <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/event5.png" className="w-56 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>E-waste art extravaganza</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through insightful panel discussions with industry
                    experts.
                  </p>
                </div>
           <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/event4.png" className="w-56 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl text-blue-500 inline-block tracking-wider ">
                  <h1>platform for paper presentation</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through insightful panel discussions with industry
                    experts.
                  </p>
                </div>
           <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events/event6.png" className="w-56 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>cultural evening</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through insightful panel discussions with industry
                    experts.
                  </p>
                </div>
           <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-32 px-6 flex flex-col gap-9">
          <div className="flex text-white font-staat justify-between items-center gap-10">
            <div>
              <img src="/events/event1.png" className="w-72 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>Engaging Panel Discussions</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through insightful panel discussions with industry
                  experts.
                </p>
              </div>
              <div className="w-full">
                <ol className="flex gap-5 w-full ">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex text-white font-staat justify-between items-center gap-10">
            <div>
              <img src="/events/event2.png" className="w-72 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>Inspiring expert talks</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through insightful panel discussions with industry
                  experts.
                </p>
              </div>
              <div className="">
                <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex text-white font-staat justify-between items-center gap-10">
            <div>
              <img src="/events/event3.png" className="w-72 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>Hands on workshop</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through insightful panel discussions with industry
                  experts.
                </p>
              </div>
              <div className="">
                <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex text-white font-staat justify-between items-center gap-10">
            <div>
              <img src="/events/event5.png" className="w-72 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>E-waste art extravaganza</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through insightful panel discussions with industry
                  experts.
                </p>
              </div>
              <div className="">
                <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex text-white font-staat justify-between items-center gap-10">
            <div>
              <img src="/events/event4.png" className="w-72 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>platform for paper presentation</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through insightful panel discussions with industry
                  experts.
                </p>
              </div>
              <div className="">
                <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex text-white font-staat justify-between items-center gap-10">
            <div>
              <img src="/events/event6.png" className="w-72 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>cultural evening</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through insightful panel discussions with industry
                  experts.
                </p>
              </div>
              <div className="">
                <ol className="flex gap-5">
                  <li>Industry Experts</li>
                  <li>Embracing AI era</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
