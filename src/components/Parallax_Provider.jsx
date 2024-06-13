"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Parallax_Provider({children}){
    return (
        <ParallaxProvider>
            <Navbar />
                {children}
            <Footer />
        </ParallaxProvider>
    )
}