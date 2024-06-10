"use client";
import Navbar from "./Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Parallax_Provider({children}){
    return (
        <ParallaxProvider>
            <Navbar />
            {children}
        </ParallaxProvider>
    )
}