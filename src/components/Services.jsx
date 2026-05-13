import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function Services() {
  const services = [
    "Real Estate Advisory",
    "Interior Design",
    "Property Management",
    "Investment Consulting",
    "Commercial Leasing",
    "Joint Ventures",
  ];

  return (
    <section
      id="services"
      className="py-32 bg-linear-to-b from-[#111] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            What We Do
          </p>

          <h2 className="text-5xl font-black">
            Complete Real Estate Ecosystem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#151515] border border-white/10 rounded-3xl p-10 hover:border-yellow-400 transition"
            >
              <BriefcaseBusiness
                className="text-yellow-400 mb-6"
                size={40}
              />

              <h3 className="text-2xl font-extrabold text-white mb-5">
                {service}
              </h3>

              <p className="text-gray-400 leading-7">
                Premium tailored real estate solutions crafted for
                modern investors and homeowners.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
