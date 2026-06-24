import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
function AdminOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(data);
    };

    fetchOrders();
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", orderId), {
        status: newStatus,
      });

      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId
            ? {
                ...order,
                status: newStatus,
              }
            : order,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-semibold mb-8">Orders</h1>

        <div className="bg-white rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#7A0C0C] text-white">
              <tr>
                <th className="p-4 text-left">Order No.</th>

                <th className="p-4 text-left">Customer</th>

                <th className="p-4 text-left">Phone</th>

                <th className="p-4 text-left">Details</th>

                <th className="p-4 text-left">Total</th>

                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-4 font-medium">{order.orderNumber}</td>
                  <td className="p-4">
                    <div>
                      <p className="font-semibold">{order.customer?.name}</p>

                      <p className="text-sm text-gray-500">
                        {order.customer?.email}
                      </p>
                    </div>
                  </td>

                  <td className="p-4">{order.customer?.phone}</td>

                  <td className="p-4 font-semibold">₹{order.total}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="
      border
      border-gray-300
      rounded-lg
      px-3
      py-2
    "
                    >
                      <option value="pending">Pending</option>

                      <option value="confirmed">Confirmed</option>

                      <option value="shipped">Shipped</option>

                      <option value="delivered">Delivered</option>

                      <option value="cancelled">Cancelled</option>
                    </select>{" "}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className=" bg-[#7A0C0C] text-white px-4 py-2 rounded-lg "
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <div
          className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
      z-50
    "
        >
          <div
            className="
        bg-white
        w-[90%]
        max-w-2xl
        rounded-3xl
        p-8
      "
          >
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-semibold">Order Details</h2>

              <button onClick={() => setSelectedOrder(null)}>✕</button>
            </div>

            <div className="space-y-2 mb-6">
              <p>
                <strong>Name:</strong> {selectedOrder.customer?.name}
              </p>

              <p>
                <strong>Email:</strong> {selectedOrder.customer?.email}
              </p>

              <p>
                <strong>Phone:</strong> {selectedOrder.customer?.phone}
              </p>

              <p>
                <strong>Address:</strong> {selectedOrder.customer?.address},{" "}
                {selectedOrder.customer?.city}, {selectedOrder.customer?.state}
              </p>
            </div>

            <h3 className="font-semibold mb-4">Products</h3>

            <div className="space-y-4">
              {selectedOrder.items?.map((item, index) => (
                <div
                  key={index}
                  className="
                border
                rounded-xl
                p-4
              "
                >
                  <p>{item.name}</p>

                  <p>Size: {item.size}</p>

                  <p>Qty: {item.quantity}</p>

                  <p>₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminOrders;
