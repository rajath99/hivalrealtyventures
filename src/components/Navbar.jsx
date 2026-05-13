import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-white/20
      border-b
      border-white/10
      "
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-[4px] text-[#1A1A1A]">
          HIVAL REALTY
        </h1>

        <nav className="hidden md:flex gap-8 uppercase text-sm tracking-widest text-[#1A1A1A]">
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#process" className="hover:text-yellow-400 transition">
            Process
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </nav>

        <button
          className="
          hidden
          md:block
          bg-yellow-500
          text-black
          px-6
          py-3
          rounded-full
          font-bold
          hover:scale-105
          hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]
          transition
          "
        >
          Consultation
        </button>

        {/* Mobile */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {open && (

        <div className="md:hidden bg-white/80 backdrop-blur-xl text-[#1A1A1A] border-t border-white/10 px-6 py-6 flex flex-col gap-5">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>

        </div>

      )}

    </motion.header>
  );
}