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
                The CSIS (Computer Society India Symposium) is an annual event organized by the IEEE Computer Society to promote collaboration, innovation, and knowledge sharing within India's computer science and IT community. It serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in discussions, technical sessions, and workshops.
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
                SRM Institute of Science and Technology is a top-ranking Indian university with over 52,000 students and 3,200 faculty across its campuses. Its vision is to become a world-class university providing unique learning experiences in various fields. Its mission is to achieve global excellence through international alliances, advance knowledge in a rigorous environment, and foster an inspiring atmosphere of freedom, creativity, and innovation.
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
                The IEEE CS has conducted two events: Leap'24, a three-day event starting on February 29th, combined a hackathon and ideathon where participants tackled real-world challenges using their skills and creativity. Cyber Frontiers, held on April 29th, featured IT security expert Mr. D. Swaminathan, who discussed modern cybersecurity complexities and provided insights into protecting digital assets.
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
                The CSIS (Computer Society India Symposium) is an annual event organized by the IEEE Computer Society to promote collaboration, innovation, and knowledge sharing within India's computer science and IT community. It serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in discussions, technical sessions, and workshops.
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
                SRM Institute of Science and Technology is a top-ranking Indian university with over 52,000 students and 3,200 faculty across its campuses. Its vision is to become a world-class university providing unique learning experiences in various fields. Its mission is to achieve global excellence through international alliances, advance knowledge in a rigorous environment, and foster an inspiring atmosphere of freedom, creativity, and innovation.
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
                The IEEE CS has conducted two events: Leap'24, a three-day event starting on February 29th, combined a hackathon and ideathon where participants tackled real-world challenges using their skills and creativity. Cyber Frontiers, held on April 29th, featured IT security expert Mr. D. Swaminathan, who discussed modern cybersecurity complexities and provided insights into protecting digital assets.
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
