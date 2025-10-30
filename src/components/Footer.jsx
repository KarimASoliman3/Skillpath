import logo from "../../public/imgs/logo.png";
import { contactInfo, footerLists, socialIcons } from "../constant/data";
// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Footer() {
  return (
    <>
      <footer className="pt-14  bg-white">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="container">
            {/* footer top */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr] xl:grid-cols-[1fr_0.5fr_0.5fr_0.5fr] mb-10">
              {/* footer brand  */}
              <motion.div variants={variants.fadeInUp}>
                {/* footer logo  */}
                <div>
                  <img src={logo} alt="footer-logo" width={130} height={50} />
                </div>
                {/* links */}
                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      href="#"
                      key={item.id}
                      className="flex items-center gap-2 font-medium hover:text-orange-50 hover:underline transition-colors"
                    >
                      {<item.icon />}
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
              {/* footer list  */}
              {footerLists.map((item) => (
                <motion.div
                  variants={variants.fadeInUp}
                  key={item.id}
                  className="space-y-3"
                >
                  <p className="text-lg font-bold">{item.title}</p>
                  <ul className="space-y-2.5">
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="hover:text-orange-50 transition-colors font-medium"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              {/* social profiles */}
              <motion.div
                variants={variants.fadeInUp}
                className="text-lg font-bold"
              >
                <p>Social Profiles</p>
                <div className="flex mt-5 gap-3">
                  {socialIcons.map((icon) => (
                    <button className="secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md transition-all">
                      <a href="#">{<icon.icon />}</a>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          {/* footer bootom */}
          <div className="bg-white-99 border-t border-t-white-95 shadow-lg py-3 ">
            <motion.p
              variants={variants.fadeInUp}
              className=" text-center font-medium"
            >
              &copy; {new Date().getFullYear()}
              <span className="font-bold text-orange-600"> KarimASoliman3</span>
              . All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
