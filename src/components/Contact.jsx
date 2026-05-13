import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: "Website Contact Form"
        }
      );

      alert("Enquiry Sent Successfully");

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (

    <section id="contact" className="py-32">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-black">
            Let's Build Something Extraordinary
          </h2>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-[#151515] border border-white/10 p-5 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400"
          />


          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-[#151515] border border-white/10 p-5 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-[#151515] border border-white/10 p-5 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400"
          />

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full bg-[#151515] border border-white/10 p-5 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400"
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >

            Send Enquiry

          </button>

        </form>

      </div>

    </section>
  );
}
