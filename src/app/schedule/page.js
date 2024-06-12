"use client";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
export default function Schedule(){
    const router = useRouter();
    const isMobileScreen = useMediaQuery('(min-width: 1000px)')
    return (
        <div>
        {isMobileScreen ? (
            <div className="text-white font-white h-[100vh] w-[100vw] flex items-center justify-center px-[82px] gap-24 ">
                <button className="flex flex-col text-white font-staat gap-7 items-center" onClick={() => router.push("/schedule/day1")}>
                    <div className="rounded-full bg-gray-300 h-[16vh] w-[16vh]">
                    </div>
                    <div className="text-3xl text-center">
                        <h2>Day 1</h2>
                    </div>
                </button>
                <button className="flex flex-col text-white font-staat gap-7 items-center"
                    onClick={() => router.push("/schedule/day2")}
                >
                    <div className="rounded-full bg-gray-300 h-[16vh] w-[16vh]">
                    </div>
                    <div className="text-3xl text-center">
                        <h2>Day 2</h2>
                    </div>
                </button>
                <button className="flex flex-col text-white font-staat gap-7 items-center" onClick={() => router.push("/schedule/day3")}>
                    <div className="rounded-full bg-gray-300 h-[16vh] w-[16vh]">
                    </div>
                    <div className="text-3xl text-center">
                        <h2>Day 3</h2>
                    </div>
                </button>
            </div>
        ) : (
            <div className="text-white font-staat py-32 px-6 flex flex-col gap-44 -z-50">
                <div className="flex flex-col">
                    <div className="flex gap-5 absolute">
                        <div className="rounded-full bg-gradient-to-b from-[#9c15b2] to-[#00334d] h-[4vh] w-[4vh] z-10"></div>
                        <div className="text-3xl">
                            <h1>Day 1</h1>
                        </div>
                    </div>
                    <div className="h-[10vh] flex flex-col relative top-3">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[10vh] -z-10">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center z-10">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw] ">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="h-[15vh] flex flex-col relative top-6">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[15vh]">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute z-10">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15vh] flex flex-col relative top-6">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[15vh]">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute z-10">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-5 absolute">
                        <div className="rounded-full bg-gradient-to-b from-[#9c15b2] to-[#00334d] h-[4vh] w-[4vh] z-10"></div>
                        <div className="text-3xl">
                            <h1>Day 2</h1>
                        </div>
                    </div>
                    <div className="h-[10vh] flex flex-col relative top-3">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[10vh]">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center z-10">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15vh] flex flex-col relative top-6">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[15vh]">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center z-10">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15vh] flex flex-col relative top-6">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[15vh]">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center z-10">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-5 absolute">
                        <div className="rounded-full bg-gradient-to-b from-[#9c15b2] to-[#00334d] h-[4vh] w-[4vh] z-10"></div>
                        <div className="text-3xl">
                            <h1>Day 3</h1>
                        </div>
                    </div>
                    <div className="h-[10vh] flex flex-col relative top-3">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[10vh]">
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute z-10">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15vh] flex flex-col relative top-6">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[15vh]">
                            </div>
                        </div>
                        <div>
                        <div>
                            <div className="flex gap-2">
                                <div className="w-[4vh] flex justify-center z-10">
                                    <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute">

                                    </div>
                                </div>
                                <div className="flex justify-between w-[75vw]">
                                    <div className="flex flex-col justify-center">
                                        <div className="text-2xl font-semibold">
                                            <h1>Registration HelpDesk</h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>Venue: Auditorium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-nim_ticket_b p-3">
                                        Aug 26, 2023
                                        10: 00Am
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="h-[15vh] flex flex-col relative top-6">
                        <div className="w-[4vh] flex justify-center">
                            <div className="border-l-2 border-white h-[15vh]">
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="flex gap-2">
                                    <div className="w-[4vh] flex justify-center z-10">
                                        <div className="rounded-full w-[3vh] h-[3vh] bg-gradient-to-t from-[#00a6fb] to-[#00334d] absolute">

                                        </div>
                                    </div>
                                    <div className="flex justify-between w-[75vw]">
                                        <div className="flex flex-col justify-center">
                                            <div className="text-2xl font-semibold">
                                                <h1>Registration HelpDesk</h1>
                                            </div>
                                            <div className="text-lg">
                                                <p>Venue: Auditorium</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-nim_ticket_b p-3">
                                            Aug 26, 2023
                                            10: 00Am
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
            
        </div>
    )
}