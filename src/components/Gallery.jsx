import { motion } from "framer-motion";

import skyline from "../assets/skyline.jpg";
import villas from "../assets/villas.jpg";
import residential from "../assets/residential.jpg";

export default function Gallery() {

  const images = [
    skyline,
    villas,
    residential,
  ];

  return (

    <section className="py-32 bg-[#0b0b0b]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            Featured Gallery
          </p>

          <h2 className="text-5xl font-black">
            Luxury Spaces & Developments
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              hover:border-yellow-400
              hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]
              transition
              duration-500
              "
            >

              <img
                src={image}
                alt="Gallery"
                className="
                w-full
                h-[500px]
                object-cover
                hover:scale-110
                transition
                duration-700
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}