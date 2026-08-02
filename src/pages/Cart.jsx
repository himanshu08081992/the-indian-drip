import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

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
                     src={item.images?.[1] || "/heroo.png"}
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

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                        className="
      w-9
      h-9
      rounded-full
      border
      hover:bg-gray-100
      transition
    "
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                        className="
      w-9
      h-9
      rounded-full
      border
      hover:bg-gray-100
      transition
    "
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 font-semibold text-lg">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="
    w-10
    h-10
    rounded-full
    flex
    items-center
    justify-center
    hover:bg-red-50
    hover:text-red-600
    transition-all
  "
                  >
                    <Trash2 size={18} />
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

              <div className="mt-8 space-y-4 border-t pt-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-green-600">✔</span>
                  <span>Secure Checkout</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-green-600">✔</span>
                  <span>Free Shipping Across India</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-green-600">✔</span>
                  <span>7-Day Easy Exchange</span>
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
              <Link
                to="/shop"
                className="
    block
    mt-4
    text-center
    py-4
    rounded-xl
    border
    border-gray-300
    hover:bg-gray-100
    transition-all
  "
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
