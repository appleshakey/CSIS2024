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
                <img src="/event1.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Engaging Panel Discussions</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Explore current challenges and opportunities in computer
                    science through dynamic insightful panel discussions with
                    industry experts.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Industry Experts</li>
                    <li>Embracing AI era</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-10">
              <div>
                <img src="/events2.jpeg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>Inspiring expert talks</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Gain valuable insights from renowned researchers and
                    industry leaders who will generously share their knowledge,
                    and experiences.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl  tracking-wider">
                    <li>Blockchain</li>
                    <li>AI/ML</li>
                    <li>Entrepreneurship</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events3.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider text-blue-500">
                  <h1>Hands on workshop</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Enhance your skills and knowledge with interactive workshops
                    led by experienced professionals in various computer science
                    domains.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl   tracking-wider">
                    <li>Data Minning</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events5.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>E-waste art extravaganza</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Participate in exciting art competition that promotes
                    creative recycling and raises awareness about responsible
                    e-waste management.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Unlease Creativity</li>
                    <li>Environmental Impact</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events4.jpg" className="w-64 h-52" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl text-blue-500 inline-block tracking-wider ">
                  <h1>platform for paper presentation</h1>
                </div>
                <div className="tracking-wider font-inter">
                  <p>
                    Showcase your research paper and make a valuable
                    contribution to the academic community by presenting your
                    papers at CSIS 2023.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Diverse Research</li>
                    <li>Generous Prizes</li>
                    <li>Expert Judges</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex text-white font-staat justify-between items-center gap-8">
              <div>
                <img src="/events6.jpg" className="w-64 h-52 " />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-3xl inline-block tracking-wider  text-blue-500">
                  <h1>cultural evening</h1>
                </div>
                <div className=" font-inter">
                  <p>
                    Enjoy a cultural evening filled with diverse performance and
                    talents from participants and also get opportunity to
                    interact and socialize with each other.
                  </p>
                </div>
                <div className="">
                  <ol className="flex gap-5 text-xl tracking-wider">
                    <li>Inclusivity and Unity</li>
                    <li>Lasting Memories</li>
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
              <img src="/event1.jpg" className="w-64 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>Engaging Panel Discussions</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Explore current challenges and opportunities in computer
                  science through dynamic insightful panel discussions with
                  industry experts.
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
              <img src="/events2.jpeg" className="w-64 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>Inspiring expert talks</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Gain valuable insights from renowned researchers and industry
                  leaders who will generously share their knowledge, and
                  experiences.
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
              <img src="/events3.jpg" className="w-64 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>Hands on workshop</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Enhance your skills and knowledge with interactive workshops
                  led by experienced professionals in various computer science
                  domains.
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
              <img src="/events4.jpg" className="w-64 h-36" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-xl text-blue-500">
                <h1>E-waste art extravaganza</h1>
              </div>
              <div className="font-serif text-sm">
                <p>
                  Participate in exciting art competition that promotes creative
                  recycling and raises awareness about responsible e-waste
                  management.
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
              <img src="/events5.jpg" className="w-64 h-36" />
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
              <img src="/events6.jpg" className="w-64 h-36" />
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
