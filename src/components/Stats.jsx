export default function Stats() {

  const stats = [
    {
      value: "500+",
      label: "Properties Delivered",
    },
    {
      value: "12+",
      label: "Years Excellence",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "200+",
      label: "Interior Projects",
    },
  ];

  return (
    <section className="py-20 bg-[#0b0b0b] border-y border-white/10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {stats.map((item, index) => (

          <div
            key={index}
            className="text-center"
          >

            <h2 className="text-5xl font-black text-yellow-400 mb-3">
              {item.value}
            </h2>

            <p className="text-gray-400 uppercase tracking-widest text-sm">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}