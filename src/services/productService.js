import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const getProducts = async () => {
  const q = query(
    collection(db, "products"),
    where("isActive", "==", true)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getAllProducts = async () => {
  const snapshot = await getDocs(
    collection(db, "products")
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

export const addProduct = async (product) => {
  await setDoc(
    doc(db, "products", product.productCode),
    product
  );
};

export const updateProduct = async (
  productCode,
  product
) => {
  await updateDoc(
    doc(db, "products", productCode),
    product
  );
};

export const deleteProduct = async (
  productCode
) => {
  await deleteDoc(
    doc(db, "products", productCode)
  );
};

export const getProductByCode = async (productCode) => {
  const snapshot = await getDoc(
    doc(db, "products", productCode)
  );

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const toggleProductStatus = async (
  productCode,
  currentStatus
) => {

  await updateDoc(
    doc(db, "products", productCode),
    {
      isActive: !currentStatus,
    }
  );

};