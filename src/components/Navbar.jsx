"use client";
import { useParallax } from "react-scroll-parallax"
import { useRouter } from "next/navigation";

export default function Navbar(){
    const router = useRouter();
    return(
        <div className="text-white font-staat text-2xl px-[82px] flex justify-between py-3 items-center fixed w-full z-50">
        <div>
            <img src="/csis_.png" className=" h-14 w-32"/>
        </div>
            <div className="flex gap-16">
                <button onClick={() => router.push('/')}>Home</button>
                <button onClick={() => router.push('/schedule/')}>Schedule</button>
                <button onClick={() => router.push('/events/')}>Events</button>
                <button onClick={() => router.push('/speakers/')}>Speakers</button>
                <button>About</button>
            </div>
        <button className="bg-[#5cb1f6] opacity-80 px-3 py-1 text-md rounded-md">register</button>
        </div>
    )
}