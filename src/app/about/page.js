"use client";
import { useMediaQuery } from "@mui/material";
export default function AboutMe(){
    const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');
    return (
        <div className="">
            {isNonMobileScreen ? (
                <div className="py-32 px-[82px]">
                    <div className="flex flex-col text-white font-staat items-center gap-16">
                        <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
                            <div className="text-4xl">
                                <h1>CSIS</h1>
                            </div>
                            <div className="text-white text-xl"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>
                        <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
                            <div className="text-4xl">
                                <h1>SRMIST</h1>
                            </div>
                            <div className="text-white text-xl"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>
                        <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
                            <div className="text-4xl">
                                <h1>CTECH</h1>
                            </div>
                            <div className="text-white text-xl"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>
                        <div className="text-white flex flex-col gap-8 font-staat text-center w-[50vw] border-4 border-white p-5 rounded-md bg-about bg-cover">
                            <div className="text-4xl">
                                <h1>IEEECS</h1>
                            </div>
                            <div className="text-white text-xl"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
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
                            <div className="text-white text-md"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>
                        <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
                            <div className="text-xl">
                                <h1>SRMIST</h1>
                            </div>
                            <div className="text-white text-md"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>
                        <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
                            <div className="text-xl">
                                <h1>CTECH</h1>
                            </div>
                            <div className="text-white text-md"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>  
                        <div className="text-white flex flex-col gap-8 font-staat text-center border-4 border-white p-1 rounded-md bg-about bg-cover">
                            <div className="text-xl">
                                <h1>IEEE CS</h1>
                            </div>
                            <div className="text-white text-md"> 
                                <p>
                                Event Overview: The CSIS (Computer Society India Symposium) is an annual flagship gathering organized by the IEEE (Institute of Electrical and Electronics Engineers) Computer Society. It aims to foster collaboration, innovation, and knowledge sharing within the computer science and information technology community in India.<br /><br />

                                Participants and Activities: The symposium serves as a premier platform for students, professionals, researchers, and enthusiasts to engage in insightful discussions, technical sessions, and interactive workshops.<br /><br />

                                Event Features: The IEEE CSIS event features a diverse range of activities, including panel discussions, technical talks, paper presentations, workshops, and cultural events, covering a wide spectrum of topics in the field of computer science and information technology.</p>
                            </div>
                        </div>      
                    </div>
                </div>
            )}

        </div>
    )
}