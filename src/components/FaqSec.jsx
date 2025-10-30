import React, { useState } from "react";
import { faqItems } from "../constant/data";
import { RiAddLine } from "@remixicon/react";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function FaqSec() {
  const [openId, setOpenId] = useState(faqItems[0].id ?? null);
  function toggleFaq(id) {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  }
  return (
    <>
      <section className="section pb-[50px] lg:mb-15">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10 shadow-lg">
            {/* title  */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <motion.h2
                  variants={variants.fadeInUp}
                  className=" text-2xl sm:text-3xl md:text-4xl "
                >
                  <span className="inline-block">
                    <span>Frequently Asked Questions</span>
                    {/* underline that matches the title width */}
                    <span className="block h-0.5 bg-orange-50 rounded mt-1.5 w-full" />
                  </span>
                </motion.h2>
                <motion.p
                  variants={variants.fadeInUp}
                  className="mt-3 md:mt-4 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-gray-700"
                >
                  Still you have any questions? Contact our Team via
                  support@skillbridge.com
                </motion.p>
              </div>
              <motion.button
                variants={variants.fadeInUp}
                className="secondary-btn w-full sm:w-auto"
              >
                See All FAQ’s
              </motion.button>
            </div>

            {/* Questions wrapper  */}
            <div className="border border-white-95 grid p-6">
              {faqItems.map((item, index) => (
                //question item
                <motion.div variants={variants.fadeInUp} key={item.id} className="space-y-3.5">
                  {/* title  */}
                  <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                    <h4 className="text-lg sm:text-xl">{item.title}</h4>
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="size-8 bg-orange-75 flex items-center justify-center aspect-square rounded-lg hover:bg-orange-75/80 transition-colors text-black/70"
                    >
                      <RiAddLine
                        className={`transition ${
                          openId === item.id ? "rotate-45" : ""
                        }`}
                        size={23}
                      />
                    </button>
                  </div>
                  {/* text  */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openId === item.id
                        ? "max-h-[200px] opacity-100 mb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-3">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
