export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-black mb-5">
            HIVAL REALTY
          </h2>

          <p className="text-gray-400 leading-7">
            Redefining luxury real estate and interior design through
            innovation and timeless architecture.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Real Estate</li>
            <li>Interior Design</li>
            <li>Property Management</li>
            <li>Investment Consulting</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">
            Legal
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>RERA</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500 text-sm">
        © 2026 Hival Realty Ventures Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}