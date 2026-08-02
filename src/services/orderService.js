import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  runTransaction,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const createOrder = async ({
  customer,
  items,
  total,
}) => {
  const orderNumber =
    "TID-" + Date.now().toString().slice(-6);

  await runTransaction(db, async (transaction) => {
    for (const item of items) {
      const productRef = doc(
        db,
        "products",
        item.productCode
      );

      const productSnap =
        await transaction.get(productRef);

      if (!productSnap.exists()) {
        throw new Error(`${item.name} not found`);
      }

      const product = productSnap.data();

      const stock =
        product.stock?.[item.size] || 0;

      if (stock < item.quantity) {
        throw new Error(
          `${item.name} (${item.size}) Out Of Stock`
        );
      }

      transaction.update(productRef, {
        [`stock.${item.size}`]:
          stock - item.quantity,
      });
    }
  });

  const docRef = await addDoc(
    collection(db, "orders"),
    {
      orderNumber,

      customer,

      items,

      total,

      status: "Pending",

      createdAt: serverTimestamp(),
    }
  );

  return {
    id: docRef.id,
    orderNumber,
  };
};