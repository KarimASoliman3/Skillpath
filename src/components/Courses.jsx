import React from "react";
import Title from "./Title";
import { coursesSecItems } from "../constant/data.js";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Courses() {
  return (
    <>
      <section className="section">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          {/* title  */}
          <Title
            title="Our Courses"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            link="View All"
          />
          {/* card wrapper */}
          <div className="grid gap-10 lg:grid-cols-2 mt-8 lg:mt-16">
            {coursesSecItems.map((item) => (
              // card
              <motion.div
                variants={variants.fadeInUp}
                className="bg-white p-7 lg:p-10 rounded-[10px]"
                key={item.id}
              >
                {/* img  */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={560}
                    height={266}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                {/* content  */}
                <div className="mt-6">
                  {/* tags */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="border border-orange-75 p-2 rounded-md bg-orange-97 mr-2 text-sm text-orange-700"
                      >
                        {tag.tag}
                      </span>
                    ))}
                    <p className="ml-auto font-medium">{item.instructor}</p>
                  </div>
                  {/* meta data  */}
                  <div className="my-6 space-y-1.5">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
                {/* button  */}
                <div className="">
                  <button className="bg-white-97 btn-primary w-full p-3.5 rounded-md font-medium border border-white-97 hover:border-orange-50 hover:text-orange-50 transition">
                    Get it now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
