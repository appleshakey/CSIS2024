"use client";
import { useMediaQuery } from "@mui/material";
export default function AboutMe() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div className="">
      {isNonMobileScreen ? (
        <div className="py-32 px-[82px]">
          <div className="flex flex-col text-white font-staat items-center gap-16">
            <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
              <div className="text-4xl">
                <h1>CSIS</h1>
              </div>
              <div className="text-white  text-md text-center font-inter ">
                <p>
                  The CSIS (Computer Society India Symposium) event is a
                  flagship gathering organized annually by the IEEE (Institute
                  of Electrical and Electronics Engineers) Computer Society,
                  aimed at fostering collaboration, innovation, and knowledge
                  sharing within the computer science and information technology
                  community in India. This symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to come together and engage in insightful
                  discussions, technical sessions, and interactive workshops.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
              <div className="text-4xl">
                <h1>SRMIST</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                  SRM Institute of Science and Technology is one of the top
                  ranking universities in India with over 52,000 full time
                  students and more than 3200 faculty across all the campuses.
                  It's vision is “To emerge as a World – Class University in
                  creating and disseminating knowledge and providing students a
                  unique learning experience in Science, Technology, Medicine,
                  Management and other areas of Scholarship that will best serve
                  the world and for the betterment of mankind”. And it's mission
                  is to “MOVE UP through international alliances and
                  collaborative initiatives to achieve global excellence.
                  ACCOMPLISH A PROCESS to advance knowledge in a rigorous
                  academic and research environment. ATTRACT AND BUILD PEOPLE in
                  a rewarding and an inspiring environment by fostering freedom,
                  empowerment, creativity and innovation”.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
              <div className="text-4xl">
                <h1>CTECH</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                  The Department of Computing Technologies (CTECH) fosters the
                  future of computing world. The Mission of the Department is to
                  advance, evolve, and enhance Computer Science and Engineering
                  fundamentals to build the intellectual capital of society. The
                  Department is excelling by keeping up with recent trends and
                  evidence of exponential and exhilarating growth.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
              <div className="text-4xl">
                <h1>IEEECS</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                  The IEEE Computer Society Student Branch Chapter at SRMIST, is
                  a part of the Institute of Electrical and Electronics
                  Engineers (IEEE), and is dedicated to the academic and
                  professional growth of SRM Institute of Science and Technology
                  students in India. It engages in competitions and projects to
                  encourage problem-solving and innovation. In addition to
                  technical pursuits, the chapter emphasizes leadership
                  development, teamwork, and collaboration for students to lead,
                  interact and grow professionally.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
              <div className="text-4xl">
                <h1>IEEE CS EVENTS</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                  The IEEE CS has conducted 2 events so far. The first being
                  Leap'24 a dynamic and innovative event that combines the
                  excitement of a hackathon with the strategic thinking of an
                  ideathon. Over the course of three days, which started on the
                  29th of February, participants will dived deep into their
                  selected domain, leveraged their skills, knowledge, and
                  creativity to tackle real-world challenges and push the
                  boundaries of innovation. The other being Cyber Frontiers
                  which was conducted on April 29th which was an enlightening
                  and insightful tech talk on the dynamic landscape of
                  cybersecurity, featuring Mr D Swaminathan, a distinguished IT
                  security veteran with over three decades of hands-on
                  experience. This event unraveled the complexities of modern
                  cybersecurity and provided invaluable insights into
                  safeguarding digital assets.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-32">
          <div className="flex flex-col gap-28 items-center p-5">
            <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
              <div className="text-xl">
                <h1>CSIS</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                  The CSIS (Computer Society India Symposium) event is a
                  flagship gathering organized annually by the IEEE (Institute
                  of Electrical and Electronics Engineers) Computer Society,
                  aimed at fostering collaboration, innovation, and knowledge
                  sharing within the computer science and information technology
                  community in India. This symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to come together and engage in insightful
                  discussions, technical sessions, and interactive workshops.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
              <div className="text-xl">
                <h1>SRMIST</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                SRM Institute of Science and Technology is one of the top
                  ranking universities in India with over 52,000 full time
                  students and more than 3200 faculty across all the campuses.
                  It's vision is “To emerge as a World – Class University in
                  creating and disseminating knowledge and providing students a
                  unique learning experience in Science, Technology, Medicine,
                  Management and other areas of Scholarship that will best serve
                  the world and for the betterment of mankind”. And it's mission
                  is to “MOVE UP through international alliances and
                  collaborative initiatives to achieve global excellence.
                  ACCOMPLISH A PROCESS to advance knowledge in a rigorous
                  academic and research environment. ATTRACT AND BUILD PEOPLE in
                  a rewarding and an inspiring environment by fostering freedom,
                  empowerment, creativity and innovation”.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
              <div className="text-xl">
                <h1>CTECH</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                The Department of Computing Technologies (CTECH) fosters the
                  future of computing world. The Mission of the Department is to
                  advance, evolve, and enhance Computer Science and Engineering
                  fundamentals to build the intellectual capital of society. The
                  Department is excelling by keeping up with recent trends and
                  evidence of exponential and exhilarating growth.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
              <div className="text-xl">
                <h1>IEEE CS</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                The IEEE Computer Society Student Branch Chapter at SRMIST, is
                  a part of the Institute of Electrical and Electronics
                  Engineers (IEEE), and is dedicated to the academic and
                  professional growth of SRM Institute of Science and Technology
                  students in India. It engages in competitions and projects to
                  encourage problem-solving and innovation. In addition to
                  technical pursuits, the chapter emphasizes leadership
                  development, teamwork, and collaboration for students to lead,
                  interact and grow professionally.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
              <div className="text-xl">
                <h1>IEEE CS EVENTS</h1>
              </div>
              <div className="text-white  text-md text-center font-inter">
                <p>
                The IEEE CS has conducted 2 events so far. The first being
                  Leap'24 a dynamic and innovative event that combines the
                  excitement of a hackathon with the strategic thinking of an
                  ideathon. Over the course of three days, which started on the
                  29th of February, participants will dived deep into their
                  selected domain, leveraged their skills, knowledge, and
                  creativity to tackle real-world challenges and push the
                  boundaries of innovation. The other being Cyber Frontiers
                  which was conducted on April 29th which was an enlightening
                  and insightful tech talk on the dynamic landscape of
                  cybersecurity, featuring Mr D Swaminathan, a distinguished IT
                  security veteran with over three decades of hands-on
                  experience. This event unraveled the complexities of modern
                  cybersecurity and provided invaluable insights into
                  safeguarding digital assets.
                  {/* <br />
                  <br />
                  Participants and Activities: The symposium serves as a premier
                  platform for students, professionals, researchers, and
                  enthusiasts to engage in insightful discussions, technical
                  sessions, and interactive workshops.
                  <br />
                  <br />
                  Event Features: The IEEE CSIS event features a diverse range
                  of activities, including panel discussions, technical talks,
                  paper presentations, workshops, and cultural events, covering
                  a wide spectrum of topics in the field of computer science and
                  information technology. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
