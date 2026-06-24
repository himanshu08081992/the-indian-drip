import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const orderNumber =
    location.state?.orderNumber ||
    "TID-UNKNOWN";

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
      <div
        className="
          bg-white

          max-w-xl
          w-full

          rounded-3xl
          p-10

          text-center
          shadow-sm
        "
      >
        <div className="text-6xl mb-6">
          🎉
        </div>

        <h1 className="text-4xl font-semibold mb-4">
          Order Confirmed
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with
          The Indian Drip.
        </p>

        <div
          className="
            bg-[#F5EFE6]

            rounded-2xl

            p-6
            mb-8
          "
        >
          <p className="text-sm text-gray-500">
            Order Number
          </p>

          <h2
            className="
              text-2xl
              font-bold

              text-[#7A0C0C]

              mt-2
            "
          >
            {orderNumber}
          </h2>
        </div>

        <p className="text-gray-500 text-sm">
          Please save your order number
          for future reference.
        </p>

        <Link
          to="/"
          className="
            inline-block

            mt-8

            bg-[#7A0C0C]
            text-white

            px-8
            py-4

            rounded-xl

            hover:bg-[#5f0909]
            transition-all
          "
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default OrderSuccess;