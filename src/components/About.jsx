import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-yellow-400 uppercase tracking-[6px] text-yellow-500 text-lg font-bold mb-6">
            Our Story
          </p>

          <h2 className="text-5xl font-black mb-8">
            Built on Trust,
            <br />
            Designed for Life
          </h2>

          <p className="text-gray/90 text-2xl mt-8 leading-9 max-w-2xl">
            Hival Realty Ventures Pvt Ltd operates at the intersection
            of intelligent investment and luxury living.
          </p>

          <p className="text-gray/90 text-2xl mt-8 leading-9 max-w-2xl">
            From acquisition to architecture, every detail is handled
            with timeless sophistication.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1974"
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
