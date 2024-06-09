"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export default function Parallax_Provider({children}){
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    )
}