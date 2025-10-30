import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data.js";
import { RiArrowRightUpLine } from "@remixicon/react";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Benefits() {
  return (
    <>
      <section className="section">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-10"
        >
          {/* title  */}
          <Title
            title="Benefits"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            link="View All"
          />
          {/* card wrapper  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16 gap-5 ">
            {benefitItems.map((item) => (
              //card
              <motion.div variants={variants.fadeInUp} className="bg-white p-10 flex flex-col rounded-xl">
                {/* icon */}
                <div className="bg-orange-75 w-[55%] h-24 mx-auto mb-8 flex items-center justify-center rounded-xl">
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                  />
                </div>
                {/* content  */}
                <div className="mb-4 text-center space-y-3.5">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                {/* button  */}
                <button className="mt-auto ml-auto border border-white-95 size-14 text-orange-50 flex items-center gap-2 hover:bg-orange-50 hover:text-white transition-colors px-4 py-2 rounded-md">
                  <RiArrowRightUpLine size={26} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
