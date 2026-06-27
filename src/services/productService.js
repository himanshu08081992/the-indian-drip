import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));

  console.log("Documents:", snapshot.size);

  console.log(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProduct = async (productCode) => {
  const snapshot = await getDoc(doc(db, "products", productCode));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};