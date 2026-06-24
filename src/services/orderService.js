import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const createOrder =
    async (orderData) => {
        const orderNumber =
            "TID-" +
            Date.now().toString().slice(-6);

        const docRef = await addDoc(
            collection(db, "orders"),
            {
                ...orderData,
                orderNumber,
                createdAt: serverTimestamp(),
                status: "pending",
            }
        );

        return {
            id: docRef.id,
            orderNumber,
        };
    };