"use client";
import { useParallax } from "react-scroll-parallax"
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar(){
    const router = useRouter();
    const [MNavbar, setMNavbar] = useState(false);
    const isMobileScreen = useMediaQuery('(min-width: 1000px)');
    const menuVariant = {
        "open": {
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
              }
        },
        "close": {
            scale: 0,
        }
    }

    const menuItemVariant = {
        "open": {
            y:0,
            opacity: 1,
        },
        "close": {
            y: -100,
            opacity: 0,
        }
    }
    return(
    <motion.div>
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
                <button onClick={() => router.push('/about/')}>About</button>
            </div>
            <button className="bg-[#5cb1f6] opacity-80 px-3 py-1 text-md rounded-md">register</button>
        </div>
        ) : (
            <motion.div className="flex justify-between p-3 items-center fixed w-[100vw] z-50">
                <div>
                    <img src="/csis_.png" className="h-14 w-32"/>
                </div>
                <button onClick={() => setMNavbar(!MNavbar)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[40px] w-[40px]">
                        <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
                <motion.div className="fixed h-[100vh] w-[100vw] left-0 top-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50" animate = { MNavbar ? "open" : "close"} variants={menuVariant} initial={"close"}>
                        <motion.div className="text-white text-3xl h-[100vh] w-[100vw] bg-gradient-to-t from-iem_ticket_b to-iem_ticket_t rounded-lg p-5 flex flex-col gap-5 z-50">
                            <motion.div className="flex justify-end font-staat">
                                <button onClick={() => setMNavbar(!MNavbar)}>X</button>
                            </motion.div>
                            <motion.div className="text-4xl font-staat flex justify-center" variants={menuItemVariant}>
                                <h1>Menu</h1>
                            </motion.div>
                            <motion.div className="flex flex-col items-center font-staat gap-5" variants={menuVariant}>
                                <motion.button onClick={() => {
                                    setMNavbar(!MNavbar);
                                    router.push('/');}} variants={menuItemVariant}>Home</motion.button>
                                <motion.button onClick={() => {
                                    setMNavbar(!MNavbar);
                                    router.push('/schedule');}} variants={menuItemVariant}>Schedule</motion.button>
                                <motion.button onClick={() => {
                                    setMNavbar(!MNavbar);
                                    router.push('/events');}} variants={menuItemVariant}>Events</motion.button>
                                <motion.button onClick={() => {
                                    setMNavbar(!MNavbar);
                                    router.push('/speakers');}} variants={menuItemVariant}>Speakers</motion.button>
                                <motion.button onClick={() => {
                                    setMNavbar(!MNavbar);
                                    router.push('/about');}} variants={menuItemVariant}>About</motion.button>
                                <motion.button onClick={() => {
                                    setMNavbar(!MNavbar);
                                    router.push('/');}} variants={menuItemVariant}>Register Now</motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
            </motion.div>
        )}
        
    </motion.div>
    )
}