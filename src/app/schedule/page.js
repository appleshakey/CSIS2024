"use client";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
export default function Schedule() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(min-width: 1000px)");
  const font = "font-staat";
  return (
    <div className="font-staat">
      {isMobileScreen ? (
        <div className="flex justify-center">
          <div className="text-white font-staat py-32 px-6 flex flex-col gap-44 -z-50">
            <div className="flex flex-col">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
                <div className={"text-3xl tracking-wider " + font}>
                  <h1>Day 1</h1>
                </div>
              </div>
              <div className="h-[10vh] flex flex-col relative top-3">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[10vh] -z-10"></div>
                </div>
                <div>
                  <div className={"flex gap-2 tracking-wider " + font}>
                    <div className="w-[4vh] flex justify-center z-10">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center">
                        <div className="text-2xl font-semibold">
                          <h1>Registration</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white  p-3">
                        July 29, 2024 9:00 to 10:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2  tracking-wider " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Inauguration</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 29, 2024 10:00 to 11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div
                      className={
                        "flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md " +
                        font
                      }
                    >
                      <div className="flex flex-col justify-center tracking-wider ">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 1</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Saptarshi Gosh</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3" +
                          font
                        }
                      >
                        July 29, 2024 11:00 to 11:50 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[18vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[18vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div
                      className={
                        "flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md " +
                        font
                      }
                    >
                      <div className="flex flex-col justify-center text-[#0D47A1]">
                        <div className="text-2xl font-semibold  tracking-wider ">
                          <h1>Ice Breaking Event</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3" +
                          font
                        }
                      >
                        July 29, 2024 11:50 to 12:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center  tracking-wider text-white">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 2</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Shivam Abhilash</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white p-3">
                        July 29, 2024 12:00 to 01:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-10">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div
                      className={
                        "flex justify-between tracking-wider w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md " +
                        font
                      }
                    >
                      <div className="flex flex-col justify-center text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Lunch</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-[#0D47A1] p-3">
                        July 29, 2024 01:00 to 02:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center tracking-wider text-white">
                        <div className="text-2xl font-semibold">
                          <h1>Panel discussion</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white p-3">
                        July 29, 2024 02:00 to 03:20 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-9">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div
                        className={
                          "flex flex-col justify-center text-[#0D47A1] tracking-wider " + font
                        }
                      >
                        <div className="text-2xl font-medium">
                          <h1>Question & Answering Session by Participants</h1>
                        </div>

                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3 " +
                          font
                        }
                      >
                        July 29, 2024 03:20 to 04:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[16vh] flex flex-col relative top-9">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[16vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center tracking-wider text-white">
                        <div className="text-2xl font-semibold">
                          <h1>Photo Session</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white p-3">
                        July 29, 2024 04:00 to 04:10 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div
                        className={
                          "flex flex-col justify-center tracking-wider text-[#0D47A1] " + font
                        }
                      >
                        <div className="text-2xl font-semibold">
                          <h1>Feedback session of day 1</h1>
                        </div>

                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3" +
                          font
                        }
                      >
                        July 29, 2024 04:10 to 04:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>High Tea & Networking Session</h1>
                        </div>

                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3" +
                          font
                        }
                      >
                        July 29, 2024 04:30 to 05:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  h-[4vh] w-[4vh] z-10"></div>
                <div className={"text-3xl tracking-wider " + font}>
                  <h1>Day 2</h1>
                </div>
              </div>
              <div className="h-[10vh] flex flex-col relative top-3">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[10vh] -z-10"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center z-10">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                    </div>
                    <div className="flex tracking-wider justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center">
                        <div className="text-2xl font-semibold">
                          <h1>Benifits Of IEEE</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Jagadeesh & Mr.Sivasankaran S</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white  p-3">
                        July 30, 2024 09:00 to 10:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[18vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[18vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center tracking-wider text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 1</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Prof.Amlan</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 30, 2024 10:00 to 11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20vh] flex flex-col relative top-3">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[20vh] -z-10"></div>
                </div>
                <div>
                  <div className= {"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center z-10">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center">
                        <div className="text-2xl font-semibold">
                          <h1>High tea and snacks</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white  p-3">
                        July 30, 2024 11:00 to 11:20 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[11vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[11vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className={"flex flex-col justify-center tracking-wider " + font}>
                        <div className="text-2xl font-semibold text-[#0D47A1]">
                          <h1>Coding Competition</h1>
                        </div>
                        <div className="text-xl font-semibold text-[#0D47A1]">
                          <h1>Non Technical</h1>
                        </div>
                        <div className="text-lg text-[#0D47A1]">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3 " +
                          font
                        }
                      >
                        July 30, 2024 11:20 to 12:20 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 2</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Dr.Jothi</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3 " +
                          font
                        }
                      >
                        July 30, 2024 12:20 to 01:20 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div
                        className={
                          "flex flex-col justify-center text-[#0D47A1] tracking-wider " + font
                        }
                      >
                        <div className="text-2xl font-semibold">
                          <h1>Lunch</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3 " +
                          font
                        }
                      >
                        July 30, 2024 01:20 to 02:20 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Ideathon</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3 " +
                          font
                        }
                      >
                        July 30, 2024 02:20 to 03:50 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div
                        className={
                          "flex flex-col justify-center text-[#0D47A1]  tracking-wider " + font
                        }
                      >
                        <div className="text-2xl font-semibold ">
                          <h1>Workshop</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Nikky Kumar Jha</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3 " +
                          font
                        }
                      >
                        July 30, 2024 03:50 to 04:50 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>High tea & snacks</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3 " +
                          font
                        }
                      >
                        July 30, 2024 04:50 to 05:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div
                        className={
                          "flex flex-col justify-center text-[#0D47A1] " + font
                        }
                      >
                        <div className="text-2xl font-semibold">
                          <h1>Workshop Session-2</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3 " +
                          font
                        }
                      >
                        July 30, 2024 04:00 to 05:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
                <div className={"text-3xl tracking-wider " + font}>
                  <h1>Day 3</h1>
                </div>
              </div>
              <div className="h-[10vh] flex flex-col  relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[10vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 1</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Sandeep Varma</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3" +
                          font
                        }
                      >
                        July 31, 2024 10:00 to 11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  tracking-wider text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Tea & Snacks</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 31, 2024 11:00 to 11:10 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[14vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[14vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center  tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 2</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Dr.Soma Prathibha</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3" +
                          font
                        }
                      >
                        July 31, 2024 11:10 to 12:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  tracking-wider text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Lunch</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 31, 2024 12:00 to 01:0 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center  tracking-wider " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Cultural and Valedictory</h1>
                        </div>

                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3" +
                          font
                        }
                      >
                        July 31, 2024 01:00 to 04:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[15vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2 ">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-5 rounded-md">
                      <div className={"flex flex-col justify-center text-[#0D47A1] " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Tea and snacks</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3" +
                          font
                        }
                      >
                        July 31, 2024 04:00 to 04:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white font-staat py-32 px-6 flex flex-col gap-44 -z-50">
          <div className="flex flex-col">
            <div className="flex gap-5 absolute">
              <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
              <div className={"text-3xl tracking-wider " + font}>
                <h1>Day 1</h1>
              </div>
            </div>
            <div className="h-[10vh] flex flex-col relative top-3">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[10vh] -z-10"></div>
              </div>
              <div>
                <div className={"flex gap-2  tracking-wider " + font}>
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center">
                      <div className="text-xl font-bold">
                        <h1>Registration</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-white  p-3">
                      July 29, 2024 9:00 to 10:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[16vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[16vh]"></div>
              </div>
              <div>
                <div className={"flex gap-2 " + font}>
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div className="flex flex-col justify-center  tracking-wider text-[#0D47A1]">
                      <div className="text-xl font-bold">
                        <h1>Inauguration</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center  text-sm  text-[#0D47A1] p-3">
                      July 29, 2024 10:00 to 11:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[18vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[18vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                  </div>
                  <div
                    className={
                      "flex justify-between tracking-wider w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md " +
                      font
                    }
                  >
                    <div className="flex flex-col justify-center ">
                      <div className="text-xl font-bold">
                        <h1>Tech Talk 1</h1>
                      </div>
                      <div className="text-sm font-semibold">
                        <h1>By Mr.Saptarshi Gosh</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div
                      className={
                        "flex items-center  text-sm text-white p-3" + font
                      }
                    >
                      July 29, 2024 11:00 to 11:50 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[18vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[18vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div
                    className={
                      "flex justify-between w-[75vw] tracking-wider bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md " +
                      font
                    }
                  >
                    <div className="flex flex-col justify-center text-[#0D47A1]">
                      <div className="text-xl font-bold ">
                        <h1>Ice Breaking Event</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div
                      className={
                        "flex items-center text-sm text-[#0D47A1] p-3" +
                        font
                      }
                    >
                      July 29, 2024 11:50 to 12:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[18vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[18vh]"></div>
              </div>
              <div>
                <div className={"flex gap-2 " + font}>
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  tracking-wider bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center  text-white">
                      <div className="text-xl font-bold">
                        <h1>Tech Talk 2</h1>
                      </div>
                      <div className="text-sm font-semibold tracking-wider">
                        <h1>By Mr.Shivam Abhilash</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm  text-white p-3">
                      July 29, 2024 12:00 to 01:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-10">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div
                    className={
                      "flex justify-between w-[75vw] tracking-wider bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md " +
                      font
                    }
                  >
                    <div className="flex flex-col justify-center text-[#0D47A1]">
                      <div className="text-xl font-semibold">
                        <h1>Lunch</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-[#0D47A1] p-3">
                      July 29, 2024 01:00 to 02:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[19vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[19vh]"></div>
              </div>
              <div>
                <div className={"flex gap-2 " + font}>
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between tracking-wider w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center  text-white">
                      <div className="text-xl font-semibold">
                        <h1>Panel discussion</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm  text-white p-3">
                      July 29, 2024 02:00 to 03:20 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-9">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] tracking-wider bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div
                      className={
                        "flex flex-col justify-center text-[#0D47A1] " + font
                      }
                    >
                      <div className="text-xl font-bold">
                        <h1>Question & Answering Session by Participants</h1>
                      </div>

                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div
                      className={
                        "flex items-center  text-sm text-[#0D47A1] p-3 " +
                        font
                      }
                    >
                      July 29, 2024 03:20 to 04:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[21vh] flex flex-col relative top-9">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[21vh]"></div>
              </div>
              <div>
                <div className={"flex gap-2 " + font}>
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] tracking-wider bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center  text-white">
                      <div className="text-xl font-bold">
                        <h1>Photo Session</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm  text-white p-3">
                      July 29, 2024 04:00 to 04:10 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[19vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[19vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] tracking-wider bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div
                      className={
                        "flex flex-col justify-center text-[#0D47A1] " + font
                      }
                    >
                      <div className="text-xl font-bold">
                        <h1>Feedback session of day 1</h1>
                      </div>

                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div
                      className={
                        "flex items-center text-sm text-[#0D47A1] p-3" +
                        font
                      }
                    >
                      July 29, 2024 04:10 to 04:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[18vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[18vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] tracking-wider bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className={"flex flex-col justify-center" + font}>
                      <div className="text-xl font-bold">
                        <h1>High Tea & Networking Session</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div
                      className={
                        "flex items-center text-sm text-white p-3" + font
                      }
                    >
                      July 29, 2024 04:30 to 05:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"flex flex-col mt-14 tracking-wider " + font}>
            <div className="flex gap-5 absolute">
              <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
              <div className={"text-3xl tracking-wider " + font}>
                <h1>Day 2</h1>
              </div>
            </div>
            <div className="h-[10vh] flex flex-col relative top-3">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[10vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between tracking-wider w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className={"flex flex-col justify-center "  + font}>
                      <div className="text-xl font-bold">
                        <h1>Benifits Of IEEE</h1>
                      </div>
                      <div className="text-sm font-semibold">
                        <h1>By Mr.Jagadeesh and Mr.Sivasankaran</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-white p-3 ">
                      July 30, 2024 09:00 to 10:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[17vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[17vh]"></div>
              </div>
              <div>
                <div className="flex gap-2 ">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div className="flex flex-col justify-center  text-[#0D47A1]">
                      <div className="text-xl font-bold ">
                        <h1>Tech Talk 1</h1>
                      </div>
                      <div className="text-sm font-semibold">
                        <h1>By Prof.Amlan</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm  text-[#0D47A1] p-3">
                      July 30, 2024 10:00 to 11:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-3">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-5 rounded-md">
                    <div className={"flex flex-col justify-center "  + font}>
                      <div className="text-xl font-bold">
                        <h1>High tea and snacks</h1>
                      </div>
                      <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                    </div>
                    <div className="flex items-center text-white p-3 ">
                      July 30, 2024 11:00 to 11:20 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[15vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[15vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div className="flex flex-col justify-center text-[#0D47A1]">
                      <div className="text-xl font-bold">
                        <h1>Coding Competition</h1>
                      </div>
                      <div className="text-sm font-semibold">
                        <h1>Non Technical</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold  p-3  text-[#0D47A1]">
                      July 30, 2024 11:20 to 12:20 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center ">
                      <div className="text-xl font-bold">
                        <h1>Tech Talk 2</h1>
                      </div>
                      <div className="text-xl font-semibold">
                        <h1>By Dr.Jothi</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold text-white p-3 ">
                      July 30, 2024 12:20 to 01:20 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[19vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[19vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div className="flex flex-col justify-center text-[#0D47A1] ">
                      <div className="text-xl font-bold">
                        <h1>Lunch</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold text-[#0D47A1] p-3 ">
                      July 30, 2024 01:20 to 02:20 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[18vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[18vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center ">
                      <div className="text-xl font-bold">
                        <h1>Ideathon</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold text-white p-3 ">
                      July 30, 2024 02:20 to 03:50 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[18vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[18vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div className="flex flex-col justify-center text-[#0D47A1] ">
                      <div className="text-xl font-bold ">
                        <h1>Workshop</h1>
                      </div>
                      <div className="text-sm font-semibold">
                        <h1>By Mr.Nikky Kumar Jha</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold text-[#0D47A1] p-3 ">
                      July 30, 2024 03:50 to 04:50 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                    <div className="flex flex-col justify-center ">
                      <div className="text-xl font-bold">
                        <h1>High tea & snacks</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold text-white p-3 ">
                      July 30, 2024 4:50 to 5:15 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[7vh]">

            </div>
            {/* <div className="h-[15vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh]"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                    <div className="flex flex-col justify-center text-[#0D47A1] ">
                      <div className="text-xl font-bold">
                        <h1>Workshop Session-2</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-[#0D47A1] p-3 ">
                      July 30, 2024 04:00 to 05:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col mt-10 tracking-wider ">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
                <div className={"text-3xl tracking-wider " + font}>
                  <h1>Day 3</h1>
                </div>
              </div>
              <div className="h-[10vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[10vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center " + font}>
                        <div className="text-xl font-bold">
                          <h1>Tech Talk 1</h1>
                        </div>
                        <div className="text-sm font-semibold">
                          <h1>By Mr.Sandeep Varma</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center text-sm text-white p-3" +
                          font
                        }
                      >
                        July 31, 2024 10:00 to 11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[23vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[23vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-xl font-bold">
                          <h1>Tea & Snacks</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm  text-[#0D47A1] p-3">
                        July 31, 2024 11:00 to 11:10 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[20vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center " + font}>
                        <div className="text-xl font-bold">
                          <h1>Tech Talk 2</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Dr.Soma Prathibha</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center text-sm text-white p-3" +
                          font
                        }
                      >
                        July 31, 2024 11:10 to 12:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[23vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[23vh]"></div>
                </div>
                <div>
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-xl font-bold">
                          <h1>Lunch</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm  text-[#0D47A1] p-3">
                        July 31, 2024 12:00 to 01:0 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[16vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[16vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className={"flex flex-col justify-center " + font}>
                        <div className="text-xl font-bold">
                          <h1>Cultural and Valedictory</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-white p-3" +
                          font
                        }
                      >
                        July 31, 2024 04:00 to 04:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[16vh] flex flex-col relative top-6">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[16svh]"></div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-5 rounded-md">
                      <div className={"flex flex-col justify-center text-[#0D47A1] " + font}>
                        <div className="text-2xl font-semibold">
                          <h1>Tea and snacks</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div
                        className={
                          "flex items-center font-semibold text-[#0D47A1] p-3" +
                          font
                        }
                      >
                        July 31, 2024 04:00 to 04:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>      
        </div>
      )}
    </div>
  );
}
