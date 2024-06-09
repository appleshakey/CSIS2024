"use client";
import { motion } from "framer-motion";
export default function TicketCard({title, eligibility, includes, price, availability, from_color, to_color}){
    const from_bg_color = `from-${from_color}`;
    const to_bg_color = `to-${to_color}`;

    return (
        <motion.div className={`bg-gradient-to-t ${from_bg_color} ${to_bg_color} p-5 text-center flex flex-col gap-9 rounded-lg`}>
            <div className="text-3xl">
                <h1>{title}</h1>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="text-xl">
                            <h3>Eligibility</h3>
                        </div>
                        <div className="text-md">
                            {eligibility}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>includes</h1>
                        </div>
                        <div>
                            {includes.map((point) => (
                                <div>
                                    - {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-2xl">RS {price}</div>
            </div>
            <div className="border rounded-lg border-white">{availability}</div>
            <div>
                <button className="w-full rounded-lg bg-cyan-600">Register now</button>
            </div>
        </motion.div>
    )
}