import { motion } from "framer-motion";
import skyline from "../assets/skyline.jpg";

export default function Hero() {

  return (

    <section className="relative h-screen overflow-hidden bg-[#F8F6F2]">

      {/* Background Image */}

      <motion.img
        src={skyline}
        alt="Luxury Skyline"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}

      <div className="absolute inset-0 bg-white/30 backdrop-brightness-75" />

      {/* Content */}

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <p className="uppercase tracking-[6px] text-[#D4AF37] text-xl font-extrabold mb-6">

              Luxury Real Estate & Interiors

            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight text-white drop-shadow-lg">

              Designing
              <br />
              Modern Living

            </h1>

            <p className="text-white/90 text-2xl mt-8 leading-9 max-w-2xl">

              Premium architecture, luxury interiors, and elegant
              real estate experiences crafted for visionary living.

            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-10 flex-wrap">

              <button
                className="
                bg-[#C8A96B]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
                duration-300
                shadow-xl
                "
              >
                Explore Projects
              </button>

              <button
                className="
                bg-white/20
                backdrop-blur-md
                border
                border-white/40
                text-white
                px-8
                py-4
                rounded-full
                hover:bg-white
                hover:text-black
                transition
                duration-300
                "
              >
                Schedule Consultation
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
