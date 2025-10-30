import React, { useState } from "react";
import logo from "../../src/assets/imgs/logo.png";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { navItems } from "../constant/data";

import { Link } from "react-scroll";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <>
      <header className="w-full py-5 ">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container flex items-center justify-between border-b border-b-white-95 pb-5"
        >
          {/* logo */}
          <motion.a variants={variants.fadeInUp} href="#">
            <img src={logo} alt="logo" width={150} height={50} />
          </motion.a>
          {/* mobile menu */}
          <nav className={`navbar ${isOpen ? "active" : ""}`}>
            {/* close menu */}
            <button
              variants={variants.fadeInUp}
              className="absolute top-8 right-8"
              onClick={toggleMenu}
            >
              <RiCloseLine size={30} />
            </button>
            {/* list */}
            <ul className="space-y-5 text-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    className={`text-lg font-medium transition-colors cursor-pointer ${
                      activeLink === item.href.replace("#", "")
                        ? "text-orange-50"
                        : "hover:text-orange-50"
                    }`}
                    to={item.href.replace("#", "")}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                    onSetActive={handleSetActive}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* login btn */}
            <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
          </nav>

          {/* menu btn */}
          <motion.button
            variants={variants.fadeInUp}
            className="lg:hidden"
            onClick={toggleMenu}
          >
            <RiMenu3Line />
          </motion.button>

          {/* lg menu */}
          <div className="max-lg:hidden flex items-center gap-10">
            {/*lg list */}
            <motion.ul variants={variants.fadeInUp} className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    className="hover:text-orange-50 transition-colors cursor-pointer font-medium text-lg"
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
            {/*lg login btn */}
            <motion.button
              variants={variants.fadeInUp}
              className="max-lg:hidden primary-btn"
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      </header>
    </>
  );
}
