"use client";
import SpeakerCard from "@/components/SpeakerCard";
import { useMediaQuery } from "@mui/material";
export default function Speakers() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      {isNonMobileScreen ? (
        <div className="flex flex-col gap-16">
          <div className="pt-32 px-[82px] flex flex-col gap-28">
            <div className="flex flex-col items-center gap-7">
              <div className="text-nim_ticket_b font-staat text-5xl">
                <h1>SPEAKERS & Dignitaries</h1>
              </div>
              <div className="grid grid-cols-3 gap-8 xl:gap-32">
                <SpeakerCard
                  heading="MR.Sandeep Varma"
                  para="Sandeep is a thought leader and chief architect of multiple large-scale enterprise big data platforms, and he heads all delivery from ZS’s big data center of excellence in India. He specializes in rapidly building high-performance teams focused on cutting-edge technologies and high-quality delivery.He did MBA in marketing and systems from BIM Trichy and a bachelor’s in mechanical engineering from Bengaluru University."
                  image="/image6.jpeg"
                />
                <SpeakerCard
                  heading="MR.Saptarshi Ghosh"
                  para="Saptarshi Ghosh is a System-On-Chip Design Engineer at Intel, who is working at the leading forefront of technology to enable and design the next generation of AI-enabled Intel Xeon® processors. His dedication and commitment to advancing computing have been recognized both at Intel as well as through the UC Berkeley College of Engineering  where he holds a Masters Degree in Electrical Engineering & Computer Sciences."
                  // He currently chairs the Students and Young Professionals Board in IEEE Computer Society, an organization having more than 50,000 members
                  image="/image3.jpeg"
                />
                <SpeakerCard
                  heading="DR.Soma Prathibha "
                  para="Dr. Soma Prathibha is a distinguished academic and thought leader with a profound impact in Cloud Computing, Data Science, and Blockchain. She has organized over 10 national and international events, published 16 research papers in top-tier international journals, and presented at 21 international and 15 national conferences. As an Excom Member of IEEE WIE MAS Section, her contributions have significantly advanced the field and inspired countless students and professionals."
                  image="/image5.jpeg"
                />
              </div>
              <div className="grid grid-cols-3 gap-8 xl:gap-32">
                <SpeakerCard
                  heading="MR.Shivam Abhilash"
                  para="Experienced technology leader with a demonstrated history of
                  working in the management consulting industry. Skilled in
                  Machine Learning, NLP, Graph, Production ready ML Solutions,
                  Leadership, Management and Solution Delivery. Strong
                  business development professional graduated from Indian
                  Institute Of Information Technology having knowledge of Data
                  Analytics."
                  image="/speakers2.jpg"
                />
                <SpeakerCard
                  heading="MR.ARUN SAMPATH"
                  para="Mr. Arun Sampath, a global technologist
specialising as a Chief Engineer and Technical
Architect delivering market leadership with
ahead-of-the-curve technologies across multiple
industries. He is well versed and experienced in
Artificial Intelligence as a service."
                  image="/idea5.jpeg"
                />
                <SpeakerCard
                  heading="PROF.AMLAN CHAKRABARTI"
                  para="With a distinguished career spanning nearly 20 years,
Dr. Amlan Chakrabarti has been recognized with
numerous awards, including the DST BOYSCAST
fellowship, INSA Visiting Faculty Fellowship, and IBM
Quantum Researchers Access Award. Has led
groundbreaking research in Embedded System Design,
Quantum Computing, and Cybersecurity, securing
multiple project grants and publishing over 160 research
papers.."
                  //  As an Associate Editor of the Elsevier Journal
                  // of Computers and Electrical Engineering and a Sr.
                  // Member of IEEE and ACM, he continues to influence
                  // the fields of Machine Learning, Computer Vision, and
                  // Reconfigurable Computing
                  image="/done2.jpeg"
                />
              </div>
              <div className="grid grid-cols-3 gap-8 xl:gap-32 ">
                <SpeakerCard
                  heading="MR.Nikky Kumar Jha"
                  para="Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields."
                  image="/speakers3.jpg"
                />
                <SpeakerCard
                  heading="MR.HR Mohan"
                  para="Mr. H.R. Mohan, an IIT Madras graduate, pioneered computing at Seshasayee Paper Boards and The Hindu, where he introduced Internet publishing. An ICT consultant and former President of the Computer Society of India, he has organized over 1250 technical events and delivered 275+ talks. A senior member of IEEE CS and ACM, he has received the IEEE MGA Leadership Award, CSI Lifetime Achievement Award, and is a Golden Core Member of IEEE CS."
                  image="/dignitary1.jpg"
                />
                 <SpeakerCard
                  heading="miss.Soumya Kashyap"
                  para="Soumya has a background in electrical and electronics engineering and is currently pursuing an MBA from IIM Bangalore. During her undergraduate days, she served as the IEEE Student Representative for the Kolkata section, successfully conducting two editions of IEEE CSIS. At IBM, Soumya worked as a software developer, focusing on product development, cost optimisation, operational excellence, artificial intelligence, and stakeholder management. She also leveraged generative AI to automate query processes. Additionally, during her time with the NatWest Group, Soumya generated strategic and operational insights to support digital transformation initiatives."
                  image="/speaker8.jpeg"
                />
              </div>
            </div>

            {/*<div className="flex flex-col items-center gap-7">
            <div className="text-7xl font-staat text-white pb-16">
              RENOWNED <span className="text-[#bcff1f]">SPEAKERS</span>
            </div>
            <div className="grid grid-cols-3 gap-8 xl:gap-32 ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-[#0070a9] group">
                <img
                  className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src="/image3.jpg"
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
          {/* <div className="text-nim_ticket_b">
            <div className="flex justify-center text-5xl font-staat">
              <h1>Dignitaries</h1>
            </div>
            <div className="flex justify-center">
              <SpeakerCard
                  heading="HR Mohan"
                  para="Mr. H.R. Mohan, an IIT Madras graduate, pioneered computing at Seshasayee Paper Boards and The Hindu, where he introduced Internet publishing. An ICT consultant and former President of the Computer Society of India, he has organized over 1250 technical events and delivered 275+ talks. A senior member of IEEE CS and ACM, he has received the IEEE MGA Leadership Award, CSI Lifetime Achievement Award, and is a Golden Core Member of IEEE CS."
                  image="/dignitary1.jpg"
                />
            </div>
          </div> */}
        </div>
      ) : (
        <div>
          <div className="pt-32 flex flex-col gap-28">
            <div className="advisors flex flex-col items-center gap-11">
              <div className="text-nim_ticket_b font-staat text-2xl">
                <h1>Speakers & Dignitaries</h1>
              </div>
              <div className="px-4 space-y-4">
                <SpeakerCard
                  heading="MR.Sandeep Varma"
                  para="Sandeep is a thought leader and chief architect of multiple large-scale enterprise big data platforms, and he heads all delivery from ZS’s big data center of excellence in India. He specializes in rapidly building high-performance teams focused on cutting-edge technologies and high-quality delivery."
                  image="/image6.jpeg"
                />
                <SpeakerCard
                  heading="MR.Saptarshi Ghosh"
                  para="Saptarshi Ghosh is a System-On-Chip Design Engineer at Intel, who is working at the leading forefront of technology to enable and design the next generation of AI-enabled Intel Xeon® processors. His dedication and commitment to advancing computing have been recognized both at Intel as well as through the UC Berkeley College of Engineering  where he holds a Masters Degree in Electrical Engineering & Computer Sciences. He currently chairs the Students and Young Professionals Board in IEEE Computer Society, an organization having more than 50,000 members."
                  image="/image3.jpeg"
                />
                <SpeakerCard
                  heading="MR.Shivam Abhilash"
                  para="Experienced technology leader with a demonstrated history of
                    working in the management consulting industry. Skilled in
                    Machine Learning, NLP, Graph, Production ready ML Solutions,
                    Leadership, Management and Solution Delivery. Strong
                    business development professional graduated from Indian
                    Institute Of Information Technology having knowledge of Data
                    Analytics."
                  image="/speakers2.jpg"
                />
                <SpeakerCard
                  heading="MR.Nikky Kumar Jha"
                  para="Specializing in renewable energy, notably solar power, I excel in fields such as medical electronics, Internet of Things (IoT), Agri-Tech, Healthcare Tech, and Machine Learning. My contributions include research papers and keynote speeches at international conferences, earning recognition through numerous international awards for my dedication and impact in these fields."
                  image="/speakers3.jpg"
                />
                <SpeakerCard
                  heading="DR.Soma Prathibha"
                  para="Dr. Soma Prathibha is a distinguished academic and thought leader with a profound impact in Cloud Computing, Data Science, and Blockchain. She has organized over 10 national and international events, published 16 research papers in top-tier international journals, and presented at 21 international and 15 national conferences. As an Excom Member of IEEE WIE MAS Section, her contributions have significantly advanced the field and inspired countless students and professionals."
                  image="/image5.jpeg"
                />
                <SpeakerCard
                  heading="MR.ARUN SAMPATH"
                  para="Mr. Arun Sampath, a global technologist
                  specialising as a Chief Engineer and Technical
                  Architect delivering market leadership with
                  ahead-of-the-curve technologies across multiple
                  industries. He is well versed and experienced in
                  Artificial Intelligence as a service."
                  image="/idea5.jpeg"
                />
                <SpeakerCard
                  heading="PROF.AMLAN CHAKRABARTI"
                  para="With a distinguished career spanning nearly 20 years,
  Dr.Amlan Chakrabarti has been recognized with
  numerous awards, including the DST BOYSCAST
 fellowship, INSA Visiting Faculty Fellowship, and IBM
 Quantum Researchers Access Award. Has led
 groundbreaking research in Embedded System Design,
 Quantum Computing, and Cybersecurity, securing
 multiple project grants and publishing over 160 research
 papers.."
                  //  As an Associate Editor of the Elsevier Journal
                  // of Computers and Electrical Engineering and a Sr.
                  // Member of IEEE and ACM, he continues to influence
                  // the fields of Machine Learning, Computer Vision, and
                  // Reconfigurable Computing
                  image="/done2.jpeg"
                />
                  <SpeakerCard
                  heading="MR.HR Mohan"
                  para="Mr. H.R. Mohan, an IIT Madras graduate, pioneered computing at Seshasayee Paper Boards and The Hindu, where he introduced Internet publishing. An ICT consultant and former President of the Computer Society of India, he has organized over 1250 technical events and delivered 275+ talks. A senior member of IEEE CS and ACM, he has received the IEEE MGA Leadership Award, CSI Lifetime Achievement Award, and is a Golden Core Member of IEEE CS."
                  image="/dignitary1.jpg"
                />
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
