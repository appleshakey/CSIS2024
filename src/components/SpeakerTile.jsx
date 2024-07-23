"use client";
import { motion, AnimatePresence } from "framer-motion";
export default function speakerTile({
  speakerImg,
  speakerName,
  speakerDescription,
}) {
  return (
    <motion.div
      className="text-white font-staat grid grid-cols-2 w-[50vw] gap-10 bg-gradient-to-br from-iec_ticket_b to-iem_ticket_b px-5 py-7 rounded-lg "
      initial={{ scale: 0, opacit: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <img src={speakerImg} className="h-96 w-96 rounded-lg" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center text-4xl">
          <h1>{speakerName}</h1>
        </div>
        <div className="text-center text-lg flex items-center">
          {speakerDescription}
        </div>
      </div>
    </motion.div>
  );
}
