
// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Title({ title, text, link }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
      <div className="text-center lg:text-left">
        <motion.h2 variants={variants.fadeInUp} className=" text-2xl sm:text-3xl md:text-4xl ">
          <span className="inline-block">
            <span>{title}</span>
            {/* underline that matches the title width */}
            <span className="block h-0.5 bg-orange-50 rounded mt-1.5 w-full" />
          </span>
        </motion.h2>
        <motion.p variants={variants.fadeInUp} className="mt-3 md:mt-4 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-gray-700">
          {text}
        </motion.p>
      </div>
      <motion.button variants={variants.fadeInUp} className="secondary-btn w-full sm:w-auto">{link}</motion.button>
    </div>
  );
}
