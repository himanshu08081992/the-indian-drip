function Loader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        bg-[#F5EFE6]

        flex
        items-center
        justify-center
      "
    >
      <div className="text-center">

        <h1
          className="
            text-5xl
            md:text-7xl

            font-bold
          "
        >
          THE{" "}
          <span className="text-[#7A0C0C]">
            INDIAN
          </span>{" "}
          DRIP
        </h1>

        <div
          className="
            mt-8

            w-64
            h-1

            bg-gray-300

            rounded-full

            overflow-hidden
          "
        >
          <div
            className="
              h-full
              w-full

              bg-[#7A0C0C]

              animate-pulse
            "
          />
        </div>

      </div>
    </div>
  );
}

export default Loader;