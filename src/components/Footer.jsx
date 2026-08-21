import { FiInstagram, FiMail, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#181818] to-black text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* Brand */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold tracking-widest">
            THE{" "}
            <span className="text-[#7A0C0C]">
              इंडियन
            </span>{" "}
            DRIP
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Wear Your Identity.
          </p>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-800 my-12"></div>

        {/* Links */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Shop */}

          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#7A0C0C] transition"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="hover:text-[#7A0C0C] transition"
                >
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#7A0C0C] transition"
                >
                  New Arrivals
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/our-story"
                  className="hover:text-[#7A0C0C] transition"
                >
                  Our Story
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#7A0C0C] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/shipping"
                  className="hover:text-[#7A0C0C] transition"
                >
                  Shipping
                </Link>
              </li>

              <li>
                <Link
                  to="/returns"
                  className="hover:text-[#7A0C0C] transition"
                >
                  Returns
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#7A0C0C] transition"
                >
                  Help Center
                </Link>
              </li>

            </ul>

          </div>

          {/* Follow */}

          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
              Follow
            </h3>

            <div className="space-y-4">

              <Link
                href="https://instagram.com/theindiandrip"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#7A0C0C] transition"
              >
                <FiInstagram />
                Instagram
              </Link>

              <Link
                href="mailto:hello@theindiandrip.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#7A0C0C] transition"
              >
                <FiMail />
                hello@theindiandrip.com
              </Link>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="border-t border-gray-800 mt-14 pt-10 text-center">

          <h3 className="text-2xl md:text-3xl font-semibold">
            READY TO MAKE A STATEMENT?
          </h3>

          <Link
            to="/collections"
            className="inline-flex items-center gap-2 mt-6 text-[#7A0C0C] font-semibold hover:gap-4 transition-all duration-300"
          >
            Explore Collection
            <FiArrowRight />
          </Link>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">

          <p>
            © 2026 THE INDIAN DRIP. All Rights Reserved.
          </p>

          <p>
            Designed & Crafted in India 🇮🇳
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;