"use client";
import { useParallax } from "react-scroll-parallax"
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";

export default function Navbar(){
    const router = useRouter();
    const isMobileScreen = useMediaQuery('(min-width: 1000px)');
    return(
    <div>
        {isMobileScreen ? (
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
        ) : (
            <div className="flex justify-between p-3 items-center fixed w-[100vw]">
                <div>
                    <img src="/csis_.png" className="h-14 w-32"/>
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[40px] w-[40px]">
                        <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
            </div>
        )}
        
    </div>
    )
}