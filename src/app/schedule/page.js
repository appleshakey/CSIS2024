"use client";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
export default function Schedule() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div className="flex justify-center">
      <div className="text-white font-staat py-32 px-6 flex flex-col gap-44 -z-50">
        <div className="flex flex-col">
          <div className="flex gap-5 absolute">
            <div className="rounded-full bg-gradient-to-b from-[#ea580b] to-[#fffef3] h-[4vh] w-[4vh] z-10"></div>
            <div className="text-3xl font-style">
              <h1>Day 1</h1>
            </div>
          </div>
          <div className="h-[10vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[10vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Registration</h1>
                    </div>
                    <div className="text-lg">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 29, 2024 9:00 to 10:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">                 
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[55vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl text-[#000002] font-semibold">
                      <h1>Inauguration</h1>
                    </div>
                    <div className="text-lg text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#000002] p-3 font-semibold">
                    July 29, 2024 10:00 to 11:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[16vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-lg">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 29, 2024 11:00 to 12:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[55vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl text-[#000002] font-semibold">
                      <h1>Tech Talk with Mr.Shivam Abhilash</h1>
                    </div>
                    <div className="text-lg text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center font-semibold text-[#000002] p-3">
                    July 29, 2024 12:00 to 01:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[15vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[15vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Lunch</h1>
                    </div>
                    <div className="text-lg">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 29, 2024 01:00 to 02:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[55vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl text-[#000002] font-semibold">
                      <h1>Tech Talk Mr.Nikky Kumar Jha</h1>
                    </div>
                    <div className="text-lg text-[#000002]">
                    <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center font-semibold text-[#000002] p-3">
                    July 29, 2024 02:00 to 03:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[15vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[15vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Tech Takh Mr.Sandeep Varma</h1>
                    </div>
                    <div className="text-lg">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 29, 2024 01:00 to 02:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[18vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[18vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[55vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl text-[#000002] font-semibold">
                      <h1>Photo Session</h1>
                    </div>
                    <div className="text-lg text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#000002] font-semibold p-3">
                    July 29, 2024 04:00 to 04:20 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[18vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[18vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center ">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>High Tea & Networking Session</h1>
                    </div>
                    <div className="text-lg">
                    <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 29, 2024 04:20 to 05:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex gap-5 absolute">
            <div className="rounded-full bg-gradient-to-b from-[#ea580b] to-[#fffef3] h-[4vh] w-[4vh] z-10"></div>
            <div className="text-3xl font-style">
              <h1>Day 2</h1>
            </div>
          </div>
          <div className="h-[10vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[10vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Panel Discussion</h1>
                    </div>
                    <div className="text-lg">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 30, 2024 10:00 to 11:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[55vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl text-[#000002] font-semibold">
                      <h1>Benifits Of IEEE</h1>
                    </div>
                    <div className="text-lg text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#000002] p-3 font-semibold">
                    July 30, 2024 11:00 to 01:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[16vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Paper Presentation</h1>
                    </div>
                    <div className="text-lg">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 30, 2024 2:00 to 03:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[55vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl text-[#000002] font-semibold">
                      <h1>Ariyan-(workshop) Session-2 Abroad Intern</h1>
                    </div>
                    <div className="text-lg text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#000002] font-semibold p-3">
                    July 30, 2024 03:30 to 04:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[15vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[15vh] "></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold">
                      <h1>Informal Activity & High Tea</h1>
                    </div>
                    <div className="text-lg">
                    <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold">
                    July 30, 2024 04:30 to 05:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="flex gap-5 absolute ">
            <div className="rounded-full bg-gradient-to-b from-[#ea580b] to-[#fffef3] h-[4vh] w-[4vh] z-10"></div>
            <div className="text-3xl font-style">
              <h1>Day 3</h1>
            </div>
          </div>
          <div className="h-[10vh] flex flex-col relative top-5">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[10vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[55vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold font-style">
                      <h1>Cultural & Valedictory</h1>
                    </div>
                    <div className="text-lg font-style">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white p-3 font-semibold font-style">
                    July 31, 2024 10:00 to 12:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
