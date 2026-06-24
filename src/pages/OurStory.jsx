function OurStory() {
  return (
    <section className="bg-[#F5EFE6] min-h-screen">

      {/* HERO */}

      <div className="max-w-[1400px] mx-auto px-6 py-24">

        <div className="text-center">

          <h1 className="text-5xl md:text-7xl font-semibold">
            OUR STORY
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            The Indian Drip was born from a simple idea —
            create streetwear that carries the spirit of India
            while speaking the language of modern culture.
          </p>

        </div>

      </div>

      {/* STORY SECTION */}

      <div className="max-w-[1200px] mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-semibold mb-6">
              Rooted In India
            </h2>

            <p className="text-gray-600 leading-8">
              India has always been a land of stories,
              traditions, colors and creativity.
              We wanted to bring that heritage into
              contemporary streetwear without making
              it feel traditional or outdated.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="
                w-full
                h-[500px]
                object-cover
                rounded-[32px]
              "
            />

          </div>

        </div>

      </div>

      {/* VISION */}

      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">

            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="
                w-full
                h-[500px]
                object-cover
                rounded-[32px]
              "
            />

          </div>

          <div className="order-1 md:order-2">

            <h2 className="text-4xl font-semibold mb-6">
              Built For The Streets
            </h2>

            <p className="text-gray-600 leading-8">
              The Indian Drip is where heritage meets
              street culture. Our pieces are designed
              for creators, dreamers, explorers and
              anyone proud of where they come from.
            </p>

          </div>

        </div>

      </div>

      {/* QUOTE */}

      <div className="max-w-[1000px] mx-auto px-6 pb-24">

        <div className="text-center">

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Rooted In India.
            <br />
            Built For The Streets.
          </h2>

        </div>

      </div>

    </section>
  );
}

export default OurStory;