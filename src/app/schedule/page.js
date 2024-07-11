"use client";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
export default function Schedule() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      {isMobileScreen ? (
        <div className="flex justify-center">
          <div className="text-white font-staat py-32 px-6 flex flex-col gap-44 -z-50">
            <div className="flex flex-col">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
                <div className="text-3xl font-style">
                  <h1>Day 1</h1>
                </div>
              </div>
              <div className="h-[10vh] flex flex-col relative top-3">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[10vh] -z-10"></div>
                </div>
                <div>
                  <div className="flex gap-2 font-style">
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
                  <div className="flex gap-2 font-style">
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
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>Teck Talk</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 29, 2024 11:00 to 12:00 PM
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
                  <div className="flex gap-2 font-style">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Shivam Abhilash</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
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
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>Lunch</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 29, 2024 01:00 to 02:00 PM
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
                  <div className="flex gap-2 font-style">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Nikky Kumar Jha</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 29, 2024 02:00 to 03:00 PM
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
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk</h1>
                        </div>
                        <div className="text-xl font-semibold">
                          <h1>By Mr.Sandeep Varma </h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 29, 2024 03:00 to 04:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[17vh] flex flex-col relative top-9">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[17vh]"></div>
                </div>
                <div>
                  <div className="flex gap-2 font-style">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Photo Session</h1>
                        </div>

                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                      July 29, 2024 04:00 to 04:20 PM
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
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>High Tea & Networking Session</h1>
                        </div>

                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 29, 2024 04:20 to 05:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB]  h-[4vh] w-[4vh] z-10"></div>
                <div className="text-3xl font-style">
                  <h1>Day 2</h1>
                </div>
              </div>
              <div className="h-[10vh] flex flex-col relative top-3">
                <div className="w-[4vh] flex justify-center">
                  <div className="border-l-2 border-white h-[10vh] -z-10"></div>
                </div>
                <div>
                  <div className="flex gap-2 font-style">
                    <div className="w-[4vh] flex justify-center z-10">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center">
                        <div className="text-2xl font-semibold">
                          <h1>Panel Discussion</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-white  p-3">
                        July 30, 2024 10:00 to 11:00 AM
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
                  <div className="flex gap-2 font-style">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Benifits Of IEEE</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 30, 2024 11:00 to 01:00 PM
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
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>Paper Presentation</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 30, 2024 2:00 to 03:30 PM
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
                  <div className="flex gap-2 font-style">
                    <div className="w-[4vh] flex justify-center">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center  text-[#0D47A1]">
                        <div className="text-2xl font-semibold">
                          <h1>Ariyan-(workshop) Session-2 Abroad Intern</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Auditorium</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold  text-[#0D47A1] p-3">
                        July 30, 2024 03:30 to 04:30 PM
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
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>Informal Activity & High Tea</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 30, 2024 04:30 to 05:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-5 absolute">
                <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
                <div className="text-3xl font-style">
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
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center font-style">
                        <div className="text-2xl font-semibold">
                          <h1>Cultural & Valedictory</h1>
                        </div>
                        <div className="text-lg">
                          <p>Venue: Concert Hall</p>
                        </div>
                      </div>
                      <div className="flex items-center font-semibold text-white font-style p-3">
                        July 31, 2024 10:00 to 12:30 PM
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
              <div className="text-3xl font-style">
                <h1>Day 1</h1>
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
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Registration</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
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
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] rounded-md p-3">
                    <div className="flex flex-col text-[#0D47A1] font-style justify-center ">
                      <div className="text-xl font-semibold">
                        <h1>Inauguration</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex font-style text-[#0D47A1] items-center p-3">
                      July 29, 2024 10:00 to 11:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[17vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[17vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Tech Talk</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                      July 29, 2024 11:00 to 12:00 PM
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
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] rounded-md p-3">
                    <div className="flex flex-col text-[#0D47A1] font-style justify-center ">
                      <div className="text-xl font-semibold">
                        <h1>Tech Talk</h1>
                      </div>
                      <div className="text-sm font-semibold">
                        <h1>By Mr.Shivam Abhilash</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex font-style text-[#0D47A1] items-center p-3">
                      July 29, 2024 12:00 to 01:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[23vh] flex flex-col relative top-7">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[23vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Lunch</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                    July 29, 2024 01:00 to 02:00 PM
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
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] rounded-md p-3">
                    <div className="flex flex-col text-[#0D47A1] font-style justify-center ">
                      <div className="text-xl font-semibold">
                        <h1>Tech Talk</h1>
                      </div>
                      <div className="text-sm font-semibold">
                      <h1>By Mr.Nikky Kumar Jha</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex text-sm font-style text-[#0D47A1] items-center p-3">
                    July 29, 2024 02:00 to 03:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[22vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[22vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Tech Talk</h1>
                      </div>
                      <div className="text-sm  font-semibold">
                      <h1>By Mr.Sandeep Varma </h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex text-sm items-center font-style text-white p-3">
                    July 29, 2024 03:00 to 04:00 PM
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
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center">
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] rounded-md p-3">
                    <div className="flex flex-col text-[#0D47A1] font-style justify-center ">
                      <div className="text-xl font-semibold">
                        <h1>Photo Session</h1>
                      </div>
                      
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex font-style text-[#0D47A1] items-center p-3">
                    July 29, 2024 04:00 to 04:20 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                      <h1>High Tea & Networking Session</h1>
                      </div>
                      
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                    July 29, 2024 04:20 to 05:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col mt-14">
            <div className="flex gap-5 absolute">
              <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
              <div className="text-3xl font-style">
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
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Panel Discussion</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                    July 30, 2024 10:00 to 11:00 AM
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
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] rounded-md p-3">
                    <div className="flex flex-col text-[#0D47A1] font-style justify-center ">
                      <div className="text-xl font-semibold">
                        <h1>Benifits Of IEEE</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex font-style text-[#0D47A1] items-center p-3">
                    July 30, 2024 11:00 to 01:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex flex-col relative top-6">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[20vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Paper Presentation</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                    July 30, 2024 2:00 to 03:30 PM
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
                    <div className="rounded-full w-[2vh] h-[2vh]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                  </div>
                  <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] rounded-md p-3">
                    <div className="flex flex-col text-[#0D47A1] font-style justify-center ">
                      <div className="text-xl font-semibold">
                      <h1>Ariyan-(workshop) Session-2 Abroad Intern</h1>
                      </div>
                   
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex font-style text-[#0D47A1] items-center p-3">
                    July 30, 2024 03:30 to 04:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[28vh] flex flex-col relative top-7">
              <div className="w-[4vh] flex justify-center">
                <div className="border-l-2 border-white h-[28vh] -z-10"></div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[4vh] flex justify-center z-10">
                    <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                  </div>
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Informal Activity & High Tea</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Concert Hall</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                    July 30, 2024 04:30 to 05:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col mt-14">
            <div className="flex gap-5 absolute">
              <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
              <div className="text-3xl font-style">
                <h1>Day 3</h1>
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
                  <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3   rounded-md">
                    <div className="flex flex-col font-style justify-center">
                      <div className="text-xl  font-semibold">
                        <h1>Cultural & Valedictory</h1>
                      </div>
                      <div className="text-lg">
                        <p>Venue: Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center font-style text-white p-3">
                    July 31, 2024 10:00 to 12:30 PM
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
