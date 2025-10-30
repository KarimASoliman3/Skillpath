import React from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";
import { div } from "motion/react-client";

export default function Testimonials() {
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
            title="Our Testimonials"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            link="View All"
          />
          {/* card wrapper  */}
          <motion.div variants={variants.fadeInUp}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1.5,
                },
                1280: {
                  slidesPerView: 2.5,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              className="grid gap-10 lg:grid-cols-2 mt-14 lg:mt-16"
            >
              {testimonialsItems.map((item) => (
                // card
                <SwiperSlide
                  key={item.id}
                  className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3 cursor-pointer"
                >
                  <p className="text-center">{item.text}</p>
                  <div className="flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                    <div className="space-y-2">
                      {/* image  */}
                      <div className="flex items-center gap-3">
                        <img
                          src={item.img}
                          alt={item.author}
                          width={50}
                          height={50}
                          className="rounded-xl"
                        />
                      </div>
                      {/* author info  */}
                      <p className="font-medium">{item.author}</p>
                    </div>
                    <button className="secondary-btn">Read full story</button>
                  </div>
                </SwiperSlide>
                
              ))}
            </Swiper>
          </motion.div>
          {/* navigation buttons */}
          <motion.div variants={variants.fadeInUp} className="flex items-center justify-center gap-10 mt-6">
            <button className="bg-orange-70 size-10 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:bg-orange-75/80 prev-btn">
              <RiArrowLeftLine size={22} />
            </button>
            <button className="bg-orange-70 size-10 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:bg-orange-75/80 next-btn">
              <RiArrowRightLine size={22} />
            </button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
