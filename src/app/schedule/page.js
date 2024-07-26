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
                        <div className="text-lg font-semibold">
                          <h1>Guest</h1>
                        </div>
                      </div>
                      <div className=" font-semibold  text-white p-3">
                        <h1 className="mt-5 ">July 29, 2024 09:00 to 10:00 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                        <div className="text-lg font-semibold">
                          <h1>Chief Guest and other dignitaries</h1>
                        </div>
                      </div>
                      <div className=" font-semibold  text-[#0D47A1] p-3">
                        <h1 className="mt-5">July 29, 2024 10:00 to 11:00 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>High tea & snacks</h1>
                        </div>
                      </div>
                      <div
                        className={
                          " font-semibold text-white p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 11:00 to 11:10 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                    </div>
                    <div
                      className={
                        "flex justify-between w-[50vw] bg-gradient-to-b from-[#fffef3] to-[#fffef3] p-3 rounded-md " +
                        font
                      }
                    >
                      <div className="flex flex-col justify-center tracking-wider text-[#0d47a1]">
                        <div className="text-2xl font-semibold">
                          <h1>Tech Talk 1</h1>
                        </div>
                        <div className="text-lg font-semibold">
                          <h1>By Mr.Saptarshi Gosh</h1>
                        </div>
                        <div className="text-lg">
                          <p>TOPIC:Product Management
                            Fundamentals: How the Silicon
                            Valley designs the future of
                            technology
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          " font-semibold text-[#0d47a1] p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 11:10 to 12:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                    </div>
                    <div
                      className={
                        "flex justify-between w-[50vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3 rounded-md " +
                        font
                      }
                    >
                      <div className="flex flex-col justify-center text-white">
                        <div className="text-2xl font-semibold  tracking-wider ">
                          <h1>Ice Breaking Event</h1>
                        </div>

                      </div>
                      <div
                        className={
                          " font-semibold text-white p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 12:00 to 12:10 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                      <div className="flex flex-col justify-center text-[#0D47A1]  tracking-wider ">
                        <div className="text-2xl font-semibold">
                          <h1>Session 1</h1>
                        </div>
                        <div className="text-lg font-semibold">
                          <h1>By Miss.Soumya Kashyap</h1>
                        </div>
                        <div className="text-lg">
                          <p>TOPIC:Networking to success
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          " font-semibold text-[#0D47A1] p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 12:10 to 01:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Lunch</h1>
                        </div>

                      </div>
                      <div
                        className={
                          " font-semibold text-white p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 01:00 to 02:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Workshop</h1>
                        </div>
                        <div className="text-lg">
                          <p>BY Miss.Soumya Kashyap</p>
                        </div>
                        <div className="text-lg">
                          <p>A Business game - On the horns of a dilemma</p>
                        </div>
                      </div>
                      <div
                        className={
                          " font-semibold text-[#0D47A1] p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 02:00 to 03:00 PM</h1><p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>  <p className="text-lg tracking-wider">Venue: concert hall</p>
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
                          <h1>Coding Competition</h1>
                        </div>
                        <div className="text-lg">
                          <p>Fun Event</p>
                        </div>
                        <div className="text-lg">
                          <p>Topic:MCQs + code (scenario based)</p>
                        </div>
                      </div>
                      <div
                        className={
                          " font-semibold text-white p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 03:00 to 04:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>SYP felicitation and Feedback session of day 1 </h1>
                        </div>

                      </div>
                      <div
                        className={
                          " font-semibold text-[#0d47a1] p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 04:00 to 04:45 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Group photo session</h1>
                        </div>
                      </div>
                      <div
                        className={
                          " font-semibold text-white p-3" +
                          font
                        }
                      >
                        <h1 className="mt-5">July 29, 2024 04:45 to 05:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>High Tea & Networking session </h1>
                        </div>
                      </div>
                      <div
                        className={"font-semibold text-[#0d47a1] p-3" +
                          font}>
                        <h1 className="mt-5">July 29, 2024 05:00 to 05:30 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                        <div className="text-lg font-semibold">
                          <h1>by Mr.Mohmmad Yaqub, Mr.Jagadeesh, Mr.Sivashankar</h1>
                        </div>
                      </div>
                      <div className=" font-semibold  text-white p-3">
                        <h1 className="mt-5 ">July 30, 2024 09:00 to 09:45 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                        <div className="text-lg font-semibold">
                          <h1>By Prof.Amlan Chakrabarti, Director A.K Choudhury School of Information Technology, India</h1>
                        </div>
                        <div className="text-lg">
                          <p>Topic:Secure and energy Efficient Deep Network implementation for edge Computing</p>
                        </div>
                      </div>
                      <div className=" font-semibold  text-[#0D47A1] p-3">
                        <h1 className="mt-5 ">July 30, 2024 09:45 to 10:45 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                  <div className={"flex gap-2 " + font}>
                    <div className="w-[4vh] flex justify-center z-10">
                      <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                    </div>
                    <div className="flex justify-between w-[50vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                      <div className="flex flex-col justify-center">
                        <div className="text-2xl font-semibold">
                          <h1>High tea and snacks</h1>
                        </div>

                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 30, 2024 10:45 to 11:00 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Tech Talk 2</h1>
                        </div>
                        <div className="text-lg font-semibold text-[#0D47A1]">
                          <h1>by Dr.Jyoti Gautam, Associate Professor, IT, JSS Academy of Technical Education, Noida</h1>
                        </div>
                        <div className="text-lg text-[#0D47A1]">
                          <p>Topic:Data science for digital water</p>
                        </div>
                      </div>
                      <div className=" font-semibold  text-[#0d47a1]  p-3">
                        <h1 className="mt-5 ">July 30, 2024 11:00 to 11:50 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Interactive Session</h1>
                        </div>
                        <div className="text-lg font-semibold">
                          <h1>BY Mr.Nikky Kumar
                            Jha, CEO SaptKrishi Scientific
                            Pvt. Ltd.
                          </h1>
                        </div>
                        <div className="text-lg">
                          <p>TOPIC: Entrepreneurship and Startup Acceleration </p>
                        </div>
                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 30, 2024 11:50 to 12:50 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Ideathon Introduction</h1>
                        </div>
                        
                      </div>
                      <div className=" font-semibold  text-[#0d47a1]  p-3">
                        <h1 className="mt-5 ">July 30, 2024 12:50 to 01:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Lunch</h1>
                        </div>
                      
                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 30, 2024 01:00 to 02:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Ideathon</h1>
                        </div>
                   
                      </div>
                      <div className=" font-semibold  text-[#0d47a1]  p-3">
                        <h1 className="mt-5 ">July 30, 2024 02:00 to 03:30 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                      <div className="text-2xl font-semibold ">
                          <h1>Tech Talk 3</h1>
                        </div>
                        
                        <div className="text-lg font-semibold ">
                          <h1>BY Mr.Shivam Abhilash</h1>
                        </div>
                        <div className="text-lg font-semibold ">
                          <h1>Topic:Responsible AI</h1>
                        </div>
                     
                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 30, 2024 03:30 to 04:30 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>High Tea & Networking session</h1>
                        </div>
                      </div>
                      <div className=" font-semibold  text-[#0d47a1]  p-3">
                        <h1 className="mt-5 ">July 30, 2024 04:30 to 05:00 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                        <div className="text-lg font-semibold">
                          <h1>By Mr.Sandeep Kumar Varma, Partner at ZS Associates</h1>
                        </div>
                        <div className="text-lg font-semibold">
                          <h1>Topic:Artificial Intelligence</h1>
                        </div>
                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 31, 2024 09:30 to 10:30 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>High Tea & snacks</h1>
                        </div>
                     
                      </div>
                      <div className=" font-semibold  text-[#0D47A1]  p-3">
                        <h1 className="mt-5 ">July 31, 2024 10:30 to 10:45 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                        <div className="text-lg font-semibold">
                          <h1>BY Dr.Soma Pratibha, Professor of IT, Sri Sai Ram Engineering College, Anna University, India</h1>
                        </div>
                        <div className="text-lg font-semibold">
                          <h1>Topic:Third Generation Neural Network</h1>
                        </div>
                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 31, 2024 10:45 to 11:45 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Tech Talk 3</h1>
                        </div>
                        <div className="text-lg font-semibold">
                          <h1>By Dr.Arunkumar Sampath, Principal Consultant, TCS</h1>
                        </div>
                        <div className="text-lg">
                          <p>TOPIC:AI as a Service (AIaaS)</p>
                        </div>
                      </div>
                      <div className=" font-semibold  text-[#0d47a1]  p-3">
                        <h1 className="mt-5 ">July 31, 2024 11:45 to 12:45 PM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Lunch</h1>
                        </div>

                      </div>
                      <div className=" font-semibold  text-white  p-3">
                        <h1 className="mt-5 ">July 31, 2024 12:45 to 01:45 pM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Cultural Event </h1>
                        </div>
                      
                      </div>
                      <div className=" font-semibold  text-[#0d47a1]  ">
                        <h1 className="mt-5 ">July 31, 2024 01:45 to 02:45 AM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                          <h1>Valedictory Address</h1>
                        </div>

                      </div>
                      <div className=" font-semibold  text-white ">
                        <h1 className="mt-5 ">July 31, 2024 02:45 to 03:30 pM</h1>
                        <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
              <div className={"flex gap-2 tracking-wider " + font}>
                <div className="w-[4vh] flex justify-center z-10">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                </div>
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className="flex flex-col justify-center">
                    <div className="text-xl font-semibold">
                      <h1>Registration</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>Guest</h1>
                    </div>
                  </div>
                  <div className=" font-semibold  text-white p-3">
                    <h1 className="mt-5 ">July 29, 2024 09:00 to 10:00 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div className="flex flex-col justify-center  text-[#0D47A1]">
                    <div className="text-xl font-semibold">
                      <h1>Inauguration</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>Chief Guest and other dignitaries</h1>
                    </div>
                  </div>
                  <div className=" font-semibold  text-[#0D47A1] p-3">
                    <h1 className="mt-5">July 29, 2024 10:00 to 11:00 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                    "flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md " +
                    font
                  }
                >
                  <div className="flex flex-col justify-center tracking-wider ">
                    <div className="text-xl font-semibold">
                      <h1>High tea & snacks</h1>
                    </div>
                  </div>
                  <div
                    className={
                      " font-semibold text-white p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 11:00 to 11:10 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#fffef3] to-[#fffef3]  absolute z-10"></div>
                </div>
                <div
                  className={
                    "flex justify-between w-[75vw] bg-gradient-to-b from-[#fffef3] to-[#fffef3] p-3 rounded-md " +
                    font
                  }
                >
                  <div className="flex flex-col justify-center tracking-wider text-[#0d47a1]">
                    <div className="text-xl font-semibold">
                      <h1>Tech Talk 1</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>By Mr.Saptarshi Gosh</h1>
                    </div>
                    <div className="text-sm">
                      <p>TOPIC:Product Management
                        Fundamentals: How the Silicon
                        Valley designs the future of
                        technology
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      " font-semibold text-[#0d47a1] p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 11:10 to 12:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB]  absolute z-10"></div>
                </div>
                <div
                  className={
                    "flex justify-between w-[75vw] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] p-3 rounded-md " +
                    font
                  }
                >
                  <div className="flex flex-col justify-center text-white">
                    <div className="text-xl font-semibold  tracking-wider ">
                      <h1>Ice Breaking Event</h1>
                    </div>

                  </div>
                  <div
                    className={
                      " font-semibold text-white p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 12:00 to 12:10 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-b from-[#fffef3] to-[#fffef3] absolute z-10"></div>
                </div>
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div className="flex flex-col justify-center text-[#0D47A1]  tracking-wider ">
                    <div className="text-xl font-semibold">
                      <h1>Session 1</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>By Miss.Soumya Kashyap</h1>
                    </div>
                    <div className="text-sm">
                      <p>TOPIC:Networking to success
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      " font-semibold text-[#0D47A1] p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 12:10 to 01:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className="flex flex-col justify-center tracking-wider text-white">
                    <div className="text-xl font-semibold">
                      <h1>Lunch</h1>
                    </div>

                  </div>
                  <div
                    className={
                      " font-semibold text-white p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 01:00 to 02:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div
                    className={
                      "flex flex-col justify-center text-[#0D47A1] tracking-wider " + font
                    }
                  >
                    <div className="text-xl font-medium">
                      <h1>Workshop</h1>
                    </div>
                    <div className="text-sm">
                      <p>BY Miss.Soumya Kashyap</p>
                    </div>
                    <div className="text-sm">
                      <p>A Business game - On the horns of a dilemma</p>
                    </div>
                  </div>
                  <div
                    className={
                      " font-semibold text-[#0D47A1] p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 02:00 to 03:00 PM</h1><p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>  <p className="text-lg tracking-wider">Venue: concert hall</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className="flex flex-col justify-center tracking-wider text-white">
                    <div className="text-xl font-semibold">
                      <h1>Coding Competition</h1>
                    </div>
                    <div className="text-sm">
                      <p>Fun Event</p>
                    </div>
                    <div className="text-sm">
                      <p>Topic:MCQs + code (scenario based)</p>
                    </div>
                  </div>
                  <div
                    className={
                      " font-semibold text-white p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 03:00 to 04:00 PM</h1>
                    {/* <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p> */}
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div
                    className={
                      "flex flex-col justify-center tracking-wider text-[#0D47A1] " + font
                    }
                  >
                    <div className="text-xl font-semibold">
                      <h1>SYP felicitation and Feedback session of day 1 </h1>
                    </div>

                  </div>
                  <div
                    className={
                      " font-semibold text-[#0d47a1] p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 04:00 to 04:45 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center tracking-wider " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Group photo session</h1>
                    </div>
                  </div>
                  <div
                    className={
                      " font-semibold text-white p-3" +
                      font
                    }
                  >
                    <h1 className="mt-5">July 29, 2024 04:45 to 05:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div
                    className={
                      "flex flex-col justify-center tracking-wider text-[#0D47A1] " + font
                    }
                  >
                    <div className="text-xl font-semibold">
                      <h1>High Tea & Networking session </h1>
                    </div>
                  </div>
                  <div
                    className={"font-semibold text-[#0d47a1] p-3" +
                      font}>
                    <h1 className="mt-5">July 29, 2024 05:00 to 05:30 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex tracking-wider justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className="flex flex-col justify-center">
                    <div className="text-xl font-semibold">
                      <h1>Benifits Of IEEE</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>by Mr.Mohmmad Yaqub, Mr.Jagadeesh, Mr.Sivashankar</h1>
                    </div>
                  </div>
                  <div className=" font-semibold  text-white p-3">
                    <h1 className="mt-5 ">July 30, 2024 09:00 to 09:45 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div className="flex flex-col justify-center tracking-wider text-[#0D47A1]">
                    <div className="text-xl font-semibold">
                      <h1>Tech Talk 1</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>By Prof.Amlan Chakrabarti, Director A.K Choudhury School of Information Technology, India</h1>
                    </div>
                    <div className="text-lg">
                      <p>Topic:Secure and energy Efficient Deep Network implementation for edge Computing</p>
                    </div>
                  </div>
                  <div className=" font-semibold  text-[#0D47A1] p-3">
                    <h1 className="mt-5 ">July 30, 2024 09:45 to 10:45 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
              <div className={"flex gap-2 " + font}>
                <div className="w-[4vh] flex justify-center z-10">
                  <div className="rounded-full w-[2vh] h-[2vh] bg-gradient-to-t from-[#1565C0] to-[#BBDEFB] absolute"></div>
                </div>
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className="flex flex-col justify-center">
                    <div className="text-xl font-semibold">
                      <h1>High tea and snacks</h1>
                    </div>

                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 30, 2024 10:45 to 11:00 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div className={"flex flex-col justify-center tracking-wider " + font}>
                    <div className="text-xl font-semibold text-[#0D47A1]">
                      <h1>Tech Talk 2</h1>
                    </div>
                    <div className="text-sm font-semibold text-[#0D47A1]">
                      <h1>by Dr.Jyoti Gautam, Associate Professor, IT, JSS Academy of Technical Education, Noida</h1>
                    </div>
                    <div className="text-sm text-[#0D47A1]">
                      <p>Topic:Data science for digital water</p>
                    </div>
                  </div>
                  <div className=" font-semibold  text-[#0d47a1]  p-3">
                    <h1 className="mt-5 ">July 30, 2024 11:00 to 11:50 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center tracking-wider " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Interactive Session</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>BY Mr.Nikky Kumar
                        Jha, CEO SaptKrishi Scientific
                        Pvt. Ltd.
                      </h1>
                    </div>
                    <div className="text-lg">
                      <p>TOPIC: Entrepreneurship and Startup Acceleration </p>
                    </div>
                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 30, 2024 11:50 to 12:50 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw]  bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div
                    className={
                      "flex flex-col justify-center text-[#0D47A1] tracking-wider " + font
                    }
                  >
                    <div className="text-xl font-semibold">
                      <h1>Ideathon Introduction</h1>
                    </div>
                    
                  </div>
                  <div className=" font-semibold  text-[#0d47a1]  p-3">
                    <h1 className="mt-5 ">July 30, 2024 12:50 to 01:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center tracking-wider " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Lunch</h1>
                    </div>
                  
                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 30, 2024 01:00 to 02:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                  <div
                    className={
                      "flex flex-col justify-center text-[#0D47A1]  tracking-wider " + font
                    }
                  >
                    <div className="text-xl font-semibold ">
                      <h1>Ideathon</h1>
                    </div>
               
                  </div>
                  <div className=" font-semibold  text-[#0d47a1]  p-3">
                    <h1 className="mt-5 ">July 30, 2024 02:00 to 03:30 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center tracking-wider " + font}>
                  <div className="text-xl font-semibold ">
                      <h1>Tech Talk 3</h1>
                    </div>
                    
                    <div className="text-sm font-semibold ">
                      <h1>BY Mr.Shivam Abhilash</h1>
                    </div>
                    <div className="text-sm font-semibold ">
                      <h1>Topic:Responsible AI</h1>
                    </div>
                 
                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 30, 2024 03:30 to 04:30 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                  <div
                    className={
                      "flex flex-col justify-center text-[#0D47A1]  tracking-wider " + font
                    }
                  >
                    <div className="text-xl font-semibold ">
                      <h1>High Tea & Networking session</h1>
                    </div>
                  </div>
                  <div className=" font-semibold  text-[#0d47a1]  p-3">
                    <h1 className="mt-5 ">July 30, 2024 04:30 to 05:00 PM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                    <div className="text-xl font-semibold">
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center tracking-wider " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Tech Talk 1</h1>
                    </div>
                    <div className="text-sm font-semibold">
                      <h1>By Mr.Sandeep Kumar Varma, Partner at ZS Associates</h1>
                    </div>
                    <div className="text-lg font-semibold">
                      <h1>Topic:Artificial Intelligence</h1>
                    </div>
                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 31, 2024 09:30 to 10:30 AM</h1>
                    <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div className="flex flex-col justify-center  tracking-wider text-[#0D47A1]">
                    <div className="text-xl font-semibold">
                      <h1>High Tea & snacks</h1>
                    </div>
                 
                  </div>
                  <div className=" font-semibold  text-[#0D47A1]  p-3">
                    <h1 className="mt-5 ">July 31, 2024 10:30 to 10:45 AM</h1>
                    <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center  tracking-wider " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Tech Talk 2</h1>
                    </div>
                    <div className="text-lg font-semibold">
                      <h1>BY Dr.Soma Pratibha, Professor of IT, Sri Sai Ram Engineering College, Anna University, India</h1>
                    </div>
                    <div className="text-lg font-semibold">
                      <h1>Topic:Third Generation Neural Network</h1>
                    </div>
                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 31, 2024 10:45 to 11:45 AM</h1>
                    <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-3 rounded-md">
                  <div className="flex flex-col justify-center  tracking-wider text-[#0D47A1]">
                    <div className="text-xl font-semibold">
                      <h1>Tech Talk 3</h1>
                    </div>
                    <div className="text-lg font-semibold">
                      <h1>By Dr.Arunkumar Sampath, Principal Consultant, TCS</h1>
                    </div>
                    <div className="text-lg">
                      <p>TOPIC:AI as a Service (AIaaS)</p>
                    </div>
                  </div>
                  <div className=" font-semibold  text-[#0d47a1]  p-3">
                    <h1 className="mt-5 ">July 31, 2024 11:45 to 12:45 PM</h1>
                    <p className="text-lg tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center  tracking-wider " + font}>
                    <div className="text-sm font-semibold">
                      <h1>Lunch</h1>
                    </div>

                  </div>
                  <div className=" font-semibold  text-white  p-3">
                    <h1 className="mt-5 ">July 31, 2024 12:45 to 01:45 pM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-t from-[#fffef3] to-[#fffef3] p-5 rounded-md">
                  <div className={"flex flex-col justify-center text-[#0D47A1] " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Cultural Event </h1>
                    </div>
                  
                  </div>
                  <div className=" font-semibold  text-[#0d47a1]  ">
                    <h1 className="mt-5 ">July 31, 2024 01:45 to 02:45 AM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
                <div className="flex justify-between w-[75vw] bg-gradient-to-b from-[#1565C0] to-[#BBDEFB] p-3 rounded-md">
                  <div className={"flex flex-col justify-center  tracking-wider " + font}>
                    <div className="text-xl font-semibold">
                      <h1>Valedictory Address</h1>
                    </div>

                  </div>
                  <div className=" font-semibold  text-white ">
                    <h1 className="mt-5 ">July 31, 2024 02:45 to 03:30 pM</h1>
                    <p className="text-sm tracking-wider">Venue: Mini hall 1(TP GANESAN Auditorium)</p>
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
