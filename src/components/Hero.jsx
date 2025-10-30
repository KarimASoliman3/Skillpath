import shape1 from "../assets/imgs/shape-1.png";
import shape2 from "../assets/imgs/shape-2.png";
import heroBanner from "../assets/imgs/hero-banner.png";
import { heroLogos } from "../constant/data";
import { RiPlayFill } from "@remixicon/react";
import Marquee from "react-fast-marquee";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Hero() {
  return (
    <>
      <section>
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          className="container"
          viewport={{ once: true }}
        >
          {/* content */}
          <div className="mt-[50px] md:mt-20 text-center">
            {/* title */}
            <div className="relative max-w-max mx-auto pt-8 pl-8">
              <motion.span
                variants={variants.fadeInUp}
                className="absolute top-0 left-0"
              >
                <img src={shape1} alt="title shape" width={39} height={43} />
              </motion.span>
              <motion.div
                variants={variants.fadeInUp}
                className="flex items-center bg-white-99 border border-white-95 rounded-lg p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center"
              >
                <span className="">
                  <img src={shape2} alt="title shape" width={48} height={48} />
                </span>
                <h1 className="text-2xl md:text-4xl">
                  <span className="text-orange-50"> Unlock </span>
                  Your Creative Potential
                </h1>
              </motion.div>
            </div>
            <motion.p
              variants={variants.fadeInUp}
              className="text-2xl md:text-[28px] font-medium mt-4"
            >
              with Online Design and Development Courses.
            </motion.p>
            <motion.p variants={variants.fadeInUp}>
              Learn from Industry Experts and Enhance Your Skills.
            </motion.p>

            {/* btn wrapper */}
            <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
              <motion.a
                variants={variants.fadeInUp}
                href="#courses"
                className="primary-btn max-sm:w-[80%] inline-block text-center"
              >
                Explore Courses
              </motion.a>

              <motion.a
                variants={variants.fadeInUp}
                href="#pricing"
                className="secondary-btn max-sm:w-[80%] inline-block text-center"
              >
                View Pricing
              </motion.a>
            </div>
            {/* clients logo */}
            <motion.div
              variants={variants.fadeIn}
              className="mt-8 lg:mt-[100px] relative overflow-hidden"
            >
              <Marquee pauseOnHover={true}>
                {heroLogos.map((logo) => (
                  <div key={logo.id} className="px-14 py-5">
                    <img
                      src={logo.img}
                      alt="client-logo"
                      width={logo.width}
                      height={28}
                    />
                  </div>
                ))}
              </Marquee>

              {/* left gradient */}
              <div className="absolute top-0 left-0 w-24 h-full bg-linear-to-r from-white-97 via-white-97/80 to-transparent pointer-events-none z-10"></div>

              {/* right gradient */}
              <div className="absolute top-0 right-0 w-24 h-full bg-linear-to-l from-white-97 via-white-97/80 to-transparent pointer-events-none z-10"></div>
            </motion.div>
          </div>
          {/* banner */}
          <motion.figure
            variants={variants.fadeIn}
            className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto"
          >
            <img
              src={heroBanner}
              alt="hero-banner"
              width={940}
              height={500}
              className="w-full h-full object-cover"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>

            {/* play btn  */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
              <span className="bg-white-95 w-16 h-16 flex items-center justify-center rounded-full play-btn">
                <RiPlayFill size={30} />
              </span>
            </div>
          </motion.figure>
        </motion.div>
      </section>
    </>
  );
}
