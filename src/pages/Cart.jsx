import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-10">Your Bag</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-semibold">Your Bag Is Empty</h2>

            <p className="text-gray-500 mt-4">
              Discover timeless pieces inspired by India.
            </p>
            <p className="text-gray-500 mt-4">
              Looks like you haven't added anything yet.
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
              "
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
            {/* LEFT */}

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="
                    bg-white
                    rounded-3xl
                    p-5

                    flex
                    gap-5
                    items-center
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-32
                      h-32
                      object-cover
                      rounded-2xl
                    "
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.name}</h2>

                    <p className="text-gray-500 mt-2">Size: {item.size}</p>

                    <p className="text-gray-500">Qty: {item.quantity}</p>

                    <p className="mt-3 font-semibold text-lg">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className=" text-gray-500 hover:text-[#7A0C0C] duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT */}

            <div
              className="
                bg-white
                rounded-3xl
                p-8

                h-fit
                sticky
                top-10
              "
            >
              <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
              </div>

              <div className="border-t mt-6 pt-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>

                  <span>₹{subtotal}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="
                  block

                  mt-8

                  bg-[#7A0C0C]
                  text-white

                  text-center

                  py-4

                  rounded-xl

                  hover:bg-[#5f0909]
                "
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
