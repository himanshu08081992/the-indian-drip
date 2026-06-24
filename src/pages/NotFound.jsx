import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      className="
        min-h-screen

        bg-[#F5EFE6]

        flex
        items-center
        justify-center

        px-6
      "
    >
      <div className="text-center">

        <h1
          className="
            text-8xl
            md:text-[180px]

            font-bold

            leading-none

            text-[#7A0C0C]
          "
        >
          404
        </h1>

        <h2
          className="
            text-3xl
            md:text-5xl

            font-semibold

            mt-4
          "
        >
          LOST IN THE STREETS
        </h2>

        <p
          className="
            mt-6

            text-gray-600

            max-w-xl

            mx-auto
          "
        >
          The page you're looking for doesn't exist,
          moved away, or never belonged here.
        </p>

        <div
          className="
            flex

            flex-col
            sm:flex-row

            justify-center

            gap-4

            mt-10
          "
        >

          <Link
            to="/"
            className="
              bg-[#7A0C0C]

              text-white

              px-8
              py-4

              rounded-xl

              hover:bg-[#5d0909]

              duration-300
            "
          >
            BACK HOME
          </Link>

          <Link
            to="/shop"
            className="
              border

              border-[#7A0C0C]

              text-[#7A0C0C]

              px-8
              py-4

              rounded-xl

              hover:bg-[#7A0C0C]
              hover:text-white

              duration-300
            "
          >
            EXPLORE SHOP
          </Link>

        </div>

      </div>
    </section>
  );
}

export default NotFound;