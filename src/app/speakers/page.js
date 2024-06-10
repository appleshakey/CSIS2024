import SpeakerCard from "@/components/SpeakerCard"
export default function Speakers(){
    return (
        <div>
            <div className="pt-32 px-[82px] flex flex-col gap-28">
                <div className="advisors flex flex-col items-center gap-11">
                    <div className="text-nim_ticket_b font-staat text-2xl">
                        <h1>Advisors</h1>
                    </div>
                    <div className="grid grid-flow-row grid-cols-4 gap-5">
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                    </div>
                </div>
                <div className="advisors flex flex-col items-center gap-11">
                    <div className="text-nim_ticket_b font-staat text-2xl">
                        <h1>Advisors</h1>
                    </div>
                    <div className="grid grid-flow-row grid-cols-4 gap-5">
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                        <SpeakerCard />
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-3xl text-nim_ticket_b font-staat">
                        Web Development
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-3xl text-nim_ticket_b font-staat">
                        Corporate
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-3xl text-nim_ticket_b font-staat">
                        Documentation
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
                <div className="flex flex-col webdev items-center gap-7">
                    <div className="text-3xl text-nim_ticket_b font-staat">
                        Publicity
                    </div>
                    <div className="text-2xl text-white font-staat flex gap-7">
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1>
                        <h1>Adarsh</h1> 
                    </div>
                </div>
            </div>
        </div>
    )
}