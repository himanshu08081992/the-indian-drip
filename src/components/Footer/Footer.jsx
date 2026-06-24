import {
  FiInstagram,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20">

        {/* BRAND HERO */}

        <div className="border-b border-gray-800 pb-12 mb-16">

          <h1
            className="
             
              md:text-7xl
              lg:text-8xl
text-4xl
              font-bold

              text-center
            "
          >
            THE{" "}
            <span className="text-[#7A0C0C]">
              इंडियन
            </span>{" "}
            DRIP
          </h1>

          <p
            className="
              text-center

              text-gray-400

              mt-6

              text-lg
            "
          >
            Rooted In India.
            <br />
            Built For The Streets.
          </p>

        </div>

        {/* NEWSLETTER */}

        <div
          className="
            bg-[#181818]

            rounded-[32px]

            p-8

            mb-16
          "
        >

          <h2 className="text-3xl font-semibold">
            Join The Drip
          </h2>

          <p className="text-gray-400 mt-3">
            Get updates on new drops,
            exclusive collections and
            future releases.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">

            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1

                bg-black

                border
                border-gray-700

                rounded-xl

                px-5
                py-4

                outline-none
              "
            />

            <button
              className="
                bg-[#7A0C0C]

                px-8
                py-4

                rounded-xl

                hover:bg-[#5f0909]

                duration-300
              "
            >
              Subscribe
            </button>

          </div>

        </div>

        {/* LINKS */}

        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <h2 className="text-2xl font-semibold">
              THE इंडियन DRIP
            </h2>

            <p className="mt-6 text-gray-400 leading-7">
              Modern Indian streetwear
              inspired by culture,
              identity and exploration.
            </p>

          </div>

          {/* SHOP */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/shop">
                  All Products
                </Link>
              </li>

              <li>
                <Link to="/collections">
                  Collections
                </Link>
              </li>

            </ul>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/our-story">
                  Our Story
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* CONNECT */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-center">
                <FiInstagram />
                <span>@theindiandrip</span>
              </div>

              <div className="flex gap-3 items-center">
                <FiMail />
                <span>
                  work.theindiandrip.com
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <FiPhone />
                <span>
                  +91 XXXXX XXXXX
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-gray-800 mt-16 pt-8">

          <div
            className="
              flex
              flex-col
              md:flex-row

              justify-between

              items-center

              gap-4
            "
          >

            <p className="text-gray-500">
              © 2026 The Indian Drip
            </p>

            <p className="text-gray-500">
              Designed In India
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;