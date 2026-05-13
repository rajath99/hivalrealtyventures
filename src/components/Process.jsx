export default function Process() {
  const steps = [
    "Discovery & Vision",
    "Research & Strategy",
    "Design & Planning",
    "Execution & Delivery",
  ];

  return (
    <section id="process" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-yellow-500 text-lg font-bold mb-6">
            Luxury Real Estate & Interiors
          </p>

          <h2 className="text-5xl font-black">
            Our Process
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Designed Around Excellence
          </p>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-8 border-b border-white/10 pb-10"
            >
              <div className="text-5xl font-black text-yellow-400">
                0{index + 1}
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-3">
                  {step}
                </h3>

                <p className="text-gray-400 leading-7">
                  Structured luxury workflow ensuring transparency and
                  timeless quality.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
