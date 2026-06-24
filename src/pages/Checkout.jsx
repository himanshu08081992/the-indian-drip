import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { createOrder } from "../services/orderService";

function Checkout() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const navigate = useNavigate();

  const { cart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [errors, setErrors] = useState({});

  const fetchLocation = async (pincode) => {
    if (pincode.length !== 6) return;

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`,
      );

      const data = response.data[0];

      if (data.Status === "Success" && data.PostOffice?.length > 0) {
        setFormData((prev) => ({
          ...prev,
          city: data.PostOffice[0].District,
          state: data.PostOffice[0].State,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Your Bag Is Empty</h2>

          <Link
            to="/shop"
            className="
            inline-block
            mt-6

            bg-[#7A0C0C]
            text-white

            px-8
            py-4

            rounded-xl
          "
          >
            Explore Products
          </Link>
        </div>
      </section>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Enter a valid name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const order = await createOrder({
        customer: formData,
        items: cart,
        total,
      });

      console.log("Order Created:", order);

      clearCart();

      console.log("ORDER OBJECT:", order);
      console.log("ORDER NUMBER:", order.orderNumber);
      setLoading(false);
      navigate("/order-success", {
        state: {
          orderNumber: order.orderNumber,
        },
      });
    } catch (error) {
      setLoading(false);
      console.error("Order Error:", error);
    }
  };

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-10">
          Secure Checkout
        </h1>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* SHIPPING FORM */}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-8">Shipping Details</h2>

            <div className="space-y-5">
              {/* full name  */}
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              {/* email  */}
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              {/* phone  */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              {/* address  */}

              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  readOnly
                  className="
    border
    border-gray-300
    p-4
    rounded-xl
    bg-gray-50
  "
                />
                <input
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  readOnly
                  className="
    border
    border-gray-300
    p-4
    rounded-xl
    bg-gray-50
  "
                />
              </div>

              <input
                type="text"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) => {
                  const value = e.target.value;

                  setFormData({
                    ...formData,
                    pincode: value,
                  });

                  fetchLocation(value);
                }}
                className="
    w-full
    border
    border-gray-300
    p-4
    rounded-xl
    outline-none
    focus:border-[#7A0C0C]
  "
              />

              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
    w-full

    bg-[#7A0C0C]
    text-white

    py-4

    rounded-xl

    hover:bg-[#5f0909]

    disabled:opacity-50
    disabled:cursor-not-allowed
  "
              >
                {loading ? "Processing..." : "COMPLETE ORDER"}
              </button>
            </div>
          </form>

          {/* ORDER SUMMARY */}

          <div
            className="
    bg-white
    p-8
    rounded-3xl

    h-fit

    sticky
    top-25
  "
          >
            {" "}
            <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="
                    flex
                    justify-between
                  "
                >
                  <div>
                    <h3>{item.name}</h3>

                    <p className="text-sm text-gray-500">Size: {item.size}</p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p>₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="border-t mt-8 pt-8">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold">Total</h3>

                <h3 className="text-2xl font-bold">₹{total}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
