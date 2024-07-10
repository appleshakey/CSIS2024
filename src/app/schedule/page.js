"use client";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
export default function Schedule() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div className="flex justify-center">
      <div className="text-white font-staat py-32 px-6 flex flex-col gap-44 -z-50 ">
        {/* <div className="flex flex-col mt-10">
          <div className="flex gap-5 absolute">
            <div className="rounded-full bg-gradient-to-b from-[#ea580b] to-[#fffef3] h-[4vh] w-[4vh] z-10"></div>
            <div className="text-3xl font-style">
              <h1>Day 1</h1>
            </div>
          </div>
          <div className="h-[10vh]  flex flex-col relative  font-style ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[10vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-[#ea580b] rounded-md p-4">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1 className="">Registration</h1>
                    </div>
                    <div className="text-xs sm:text-[18px] mt-3">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] text-white p-3 font-semibold ">
                    July 29, 2024 9:00 to 10:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]  flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="  flex justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] text-[#000002] font-semibold">
                      <h1>Inauguration</h1>
                    </div>
                    <div className="text-xs sm:text-[18px] mt-3 text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center text-[#000002] p-3 font-semibold">
                    July 29, 2024 10:00 to 11:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]  flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[16vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm mt-3 sm:text-[18px] ">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center text-white p-3 font-semibold">
                    July 29, 2024 11:00 to 12:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]  flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] text-[#000002] font-semibold">
                      <h1 className="">Tech Talk</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-2 text-[#000002] font-semibold">
                      <h1 className="">By Mr.Shivam Abhilash </h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-2 text-[#000002]">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center font-semibold text-[#000002] p-3">
                    July 29, 2024 12:00 to 01:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]   flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Lunch</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-2">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center text-white p-3 font-semibold ">
                    July 29, 2024 01:00 to 02:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]   flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] text-[#000002] font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm sm:text-[18px]  mt-3 text-[#000002] font-semibold">
                      <h1>By Mr.Nikky Kumar Jha</h1>
                    </div>
                    <div className="text-sm sm:text-[18px]  mt-2 text-[#000002]">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center font-semibold text-[#000002] p-3">
                    July 29, 2024 02:00 to 03:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]  flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 font-semibold">
                      <h1>By Mr.Sandeep Varma </h1>
                    </div>
                    <div className="text-sm text-white  sm:text-[18px]  mt-2">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center text-white p-3 font-semibold date-line">
                    July 29, 2024 01:00 to 02:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[16vh]  flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#ea580b]  rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] text-[#000002] font-semibold">
                      <h1>Photo Session</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 text-[#000002]">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center text-[#000002] font-semibold p-3">
                    July 29, 2024 04:00 to 04:20 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[17vh]   flex flex-col relative  font-style event-box ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[17vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center ">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#ea580b] to-[#ea580b] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-[#ea580b] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>High Tea & Networking Session</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 font-semibold">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[16px] items-center text-white p-3 font-semibold">
                    July 29, 2024 04:20 to 05:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col mt-10">
          <div className="flex gap-5 absolute">
            <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
            <div className="text-3xl font-style">
              <h1>Day 1</h1>
            </div>
          </div>
          <div className="h-[10vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[10vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] rounded-md p-4">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Registration</h1>
                    </div>
                    <div className="text-sm sm:text-[18px]  mt-3 ">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[14px] text-white p-3 font-semibold">
                    July 29, 2024 9:00 to 10:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[17vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex text-[#0D47A1]  justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#1565C0] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-[#0D47A1] sm:text-[24px]  font-semibold">
                      <h1>Inauguration</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 text-[#0D47A1] ">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-sm items-center text-[#0D47A1]  p-3 font-semibold">
                    July 29, 2024 10:00 to 11:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[14vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[14vh] "></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col  lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col  justify-center">
                    <div className="text-sm text-white sm:text-[24px] font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm text-white sm:text-[18px] mt-3">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs text-white  sm:text-[14px] items-center  p-3 font-semibold">
                    July 29, 2024 11:00 to 12:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex  justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#42A5F5] rounded-md p-3">
                  <div className="flex flex-col text-[#0D47A1] justify-center">
                    <div className="text-sm  sm:text-[24px]  font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3  font-semibold">
                      <h1>By Mr.Shivam Abhilash</h1>
                    </div>
                    <div className="text-sm   sm:text-[18px] mt-2 ">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[14px] items-center font-semibold text-[#0D47A1] p-3">
                    July 29, 2024 12:00 to 01:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[18vh] flex flex-col relative font-style mt-4 md:mt-4 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[18vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Lunch</h1>
                    </div>
                    <div className="text-sm  sm:text-[18px] mt-3">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[14px] items-center text-white p-3 font-semibold">
                    July 29, 2024 01:00 to 02:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#1565C0] rounded-md p-3">
                  <div className="flex flex-col text-[#1565C0] justify-center">
                    <div className="text-sm sm:text-[24px]  font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-2  font-semibold">
                      <h1>By Mr.Nikky Kumar Jha</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-2 ">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[14px] items-center text-[#1565C0] p-3 font-semibold">
                    July 29, 2024 02:00 to 03:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[18vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0 ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[18vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Tech Talk</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 font-semibold">
                      <h1>By Mr.Sandeep Varma </h1>
                    </div>
                    <div className="text-sm text-white  sm:text-[18px]  mt-2">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[14px] items-center text-white p-3 font-semibold ">
                    July 29, 2024 03:00 to 04:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[18vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0 ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[18vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between lg:flex-row sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#1565C0]  rounded-md p-3">
                  <div className="flex flex-col text-[#1565C0] justify-center">
                    <div className="text-sm sm:text-[24px]  font-semibold">
                      <h1>Photo Session</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 ">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-sm items-center text-[#1565C0] font-semibold p-3">
                    July 29, 2024 04:00 to 04:20 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16vh] flex flex-col relative font-style mt-4 md:mt-6 lg:mt-4 xl:mt-0 ">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center ">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col lg:flex-row sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>High Tea & Networking Session</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 font-semibold">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-xs sm:text-[14px] items-center text-white p-3 font-semibold">
                    July 29, 2024 04:20 to 05:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex gap-5 absolute">
            <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
            <div className="text-3xl font-style">
              <h1>Day 2</h1>
            </div>
          </div>
          <div className="h-[10vh] flex flex-col relative top-5 font-style mt-4 md:mt-4 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[10vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Panel Discussion</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 ">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-sm items-center text-white p-3 font-semibold ">
                    July 30, 2024 10:00 to 11:00 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16vh] flex flex-col relative top-5 font-style mt-4 md:mt-4 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#1565C0] rounded-md p-3">
                  <div className="flex flex-col text-[#1565C0] justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Benifits Of IEEE</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex text-sm text-[#1565C0] items-center p-3 font-semibold">
                    July 30, 2024 11:00 to 01:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[17vh] -z-10"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center z-20">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Paper Presentation</h1>
                    </div>
                    <div className="text-sm mt-3 sm:text-[18px]">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-sm items-center text-white p-3 font-semibold">
                    July 30, 2024 2:00 to 03:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16vh] flex flex-col relative top-5 font-style mt-4 md:mt-4 lg:mt-4 xl:mt-0">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-white h-[16vh]"></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#fffef3] to-[#fffef3] absolute"></div>
                </div>
                <div className="flex justify-between sm:flex-row w-[65vw] bg-[#fffef3] border-r-4 border-[#1565C0]  rounded-md p-3">
                  <div className="flex text-[#1565C0] flex-col justify-center">
                    <div className="text-sm sm:text-[24px]  font-semibold">
                      <h1>Ariyan-(workshop) Session-2 Abroad Intern</h1>
                    </div>
                    <div className="text-sm  mt-3 sm:text-[18px] ">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex  text-sm items-center text-[#1565C0] font-semibold p-3">
                    July 30, 2024 03:30 to 04:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17vh] flex flex-col relative top-5 font-style">
            <div className="w-[4vh] flex justify-center">
              <div className="border-l-2 border-t-2 border-white h-[17vh] "></div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-[4vh] flex justify-center">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold">
                      <h1>Informal Activity & High Tea</h1>
                    </div>
                    <div className="text-sm mt-3 sm:text-[18px] venue-line">
                      <p>Venue: Concert Hall</p>
                    </div>
                  </div>
                  <div className="flex text-sm items-center text-white p-3 font-semibold date-line">
                    July 30, 2024 04:30 to 05:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex gap-5 absolute ">
            <div className="rounded-full bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] h-[4vh] w-[4vh] z-10"></div>
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
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#1565C0] to-[#1565C0] absolute"></div>
                </div>
                <div className="flex flex-col sm:flex-row border-r-4 justify-between w-[65vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] rounded-md p-3">
                  <div className="flex flex-col justify-center">
                    <div className="text-sm sm:text-[24px] font-semibold font-style">
                      <h1>Cultural & Valedictory</h1>
                    </div>
                    <div className="text-sm sm:text-[18px] mt-3 font-style">
                      <p>Venue: Auditorium</p>
                    </div>
                  </div>
                  <div className="flex  text-sm items-center text-white p-3 font-semibold date-line font-style">
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
