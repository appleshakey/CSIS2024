"use client";
import Register from "@/components/Register";
import { useMediaQuery } from "@mui/material";
export default function Speakers() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      {isNonMobileScreen ? (
        <div>
          <div className="pt-32 px-[82px] flex flex-col gap-28">
            <div className="flex flex-col items-center gap-7">
              <div className="text-nim_ticket_b font-staat text-5xl">
                <h1>Book your Tickets</h1>
              </div>
              <div className="grid grid-cols-3 gap-8 xl:gap-20 mt-10">
                <Register
                  heading="IEEE CS Memebers"
                  heading1="With accommodation"
                  para="Accomodation for the entire duration of the Event."
                  para1="Lunch and Snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="IEEE Members"
                  heading1="With accommodation"
                  para="Accomodation for the entire duration of the Event."
                  para1="Lunch and Snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="Non IEEE Members"
                  heading1="With accommodation"
                  para="Accomodation for the entire duration of the Event."
                  para1="Lunch and Snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="IEEE CS Memebers"
                  heading1="Without accommodation"
                  para="Lunch and Snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="IEEE Members"
                  heading1="Without accommodation"
                  para="Lunch and Snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="Non IEEE Members"
                  heading1="Without accommodation"
                  para="Lunch and Snacks will be provided."
                  tickets="Book your Tickets"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="pt-32 flex flex-col gap-28">
            <div className="advisors flex flex-col items-center gap-11">
              <div className="text-nim_ticket_b font-staat text-2xl">
                <h1>Book your Tickets</h1>
              </div>
              <div className="px-4 space-y-4">
                <Register
                  heading="IEEE CS Memebers"
                  heading1="With accommodation"
                  para="Accomodation for the entire duration of the Event."
                  para1="Lunch and snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="IEEE Members"
                  heading1="With accommodation"
                  para="Accomodation for the entire duration of the Event."
                  para1="Lunch and snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="Non IEEE Members"
                  heading1="With accommodation"
                  para="Accomodation for the entire duration of the Event."
                  para1="Lunch and snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="IEEE CS Memebers"
                  heading1="Without accommodation"
                  para="Lunch and snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="IEEE Members"
                  heading1="Without accommodation"
                  para="Lunch and snacks will be provided."
                  tickets="Book your Tickets"
                />
                <Register
                  heading="Non IEEE Members"
                  heading1="Without accommodation"
                  para="Lunch and snacks will be provided."
                  tickets="Book your Tickets"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
