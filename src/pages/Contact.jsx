function Contact() {
  return (
    <section className="bg-[#F5EFE6] min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-5xl md:text-7xl font-semibold">
            CONTACT US
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a question, collaboration idea or just want
            to say hello? We'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl font-semibold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-gray-500">
                  Email
                </p>

                <p className="text-xl font-medium">
                  hello@theindiandrip.com
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Phone
                </p>

                <p className="text-xl font-medium">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Instagram
                </p>

                <p className="text-xl font-medium">
                  @theindiandrip
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white p-8 rounded-[32px] shadow-sm">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  outline-none
                "
              />

              <button
                type="button"
                className="
                  w-full

                  bg-[#7A0C0C]
                  text-white

                  py-4

                  rounded-xl

                  hover:bg-[#5f0909]

                  duration-300
                "
              >
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;