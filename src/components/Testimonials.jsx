export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      city: "Mumbai",
    },
    {
      name: "Priya Nair",
      city: "Bangalore",
    },
    {
      name: "Arjun Sharma",
      city: "Delhi NCR",
    },
  ];

  return (
    <section className="py-32 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl font-black">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#151515] rounded-3xl p-10 border border-white/10"
            >
              <p className="text-gray-300 leading-8 mb-8">
                Exceptional professionalism and luxury execution from
                beginning to end.
              </p>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-yellow-400">
                {item.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}