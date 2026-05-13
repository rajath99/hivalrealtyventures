import { useState } from "react";
import { motion } from "framer-motion";

export default function InteriorEstimator() {

  const [bhk, setBhk] = useState("");
  const [finish, setFinish] = useState("");
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = () => {

    let base = 0;

    if (bhk === "2BHK") base = 600000;
    if (bhk === "3BHK") base = 900000;
    if (bhk === "4BHK") base = 1400000;

    if (finish === "Premium") base += 300000;
    if (finish === "Luxury") base += 700000;

    setEstimate(base);
  };

  return (

    <section className="py-32 bg-[#F8F6F2]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-[#C8A96B] mb-5 font-semibold">

            Interior Estimator

          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A]">

            Estimate Your
            <br />
            Interior Budget

          </h2>

          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto leading-8">

            Get a rough estimate for your luxury interior requirements
            based on apartment size and finish quality.

          </p>

        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
          bg-white/70
          backdrop-blur-xl
          border
          border-white/50
          rounded-[40px]
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div className="p-10 md:p-14">

              <div className="grid md:grid-cols-2 gap-6">

                {/* BHK */}

                <div>

                  <label className="text-sm text-gray-500 mb-3 block">
                    Apartment Type
                  </label>

                  <select
                    onChange={(e) => setBhk(e.target.value)}
                    className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    outline-none
                    focus:border-[#C8A96B]
                    text-[#1A1A1A]
                    "
                  >

                    <option>Select BHK</option>
                    <option>2BHK</option>
                    <option>3BHK</option>
                    <option>4BHK</option>

                  </select>

                </div>

                {/* Finish */}

                <div>

                  <label className="text-sm text-gray-500 mb-3 block">
                    Interior Finish
                  </label>

                  <select
                    onChange={(e) => setFinish(e.target.value)}
                    className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    outline-none
                    focus:border-[#C8A96B]
                    text-[#1A1A1A]
                    "
                  >

                    <option>Select Finish</option>
                    <option>Premium</option>
                    <option>Luxury</option>

                  </select>

                </div>

                {/* Phone */}

                <div>

                  <label className="text-sm text-gray-500 mb-3 block">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+91 XXXXX XXXXX"
                    className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    outline-none
                    focus:border-[#C8A96B]
                    text-[#1A1A1A]
                    "
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="text-sm text-gray-500 mb-3 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    outline-none
                    focus:border-[#C8A96B]
                    text-[#1A1A1A]
                    "
                  />

                </div>

              </div>

              {/* Button */}

              <button
                onClick={calculateEstimate}
                className="
                mt-10
                bg-[#C8A96B]
                text-white
                px-10
                py-5
                rounded-full
                font-semibold
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(200,169,107,0.4)]
                transition
                duration-300
                "
              >

                Estimate Cost

              </button>

            </div>

            {/* RIGHT SIDE */}

            <div
              className="
              bg-gradient-to-br
              from-[#C8A96B]
              to-[#B8935F]
              text-white
              flex
              flex-col
              justify-center
              p-14
              "
            >

              <p className="uppercase tracking-[5px] text-white/70 mb-4">

                Estimated Range

              </p>

              <h3 className="text-5xl font-black mb-6">

                {estimate
                  ? `₹ ${estimate.toLocaleString()}+`
                  : "₹ --"}

              </h3>

              <p className="text-white/80 leading-8 text-lg">

                Final pricing depends on:
                materials, carpentry scope, modular work,
                ceiling design, lighting, furnishings,
                and custom requirements.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}