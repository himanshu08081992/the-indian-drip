import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

const googleProvider = new GoogleAuthProvider();

export const signupUser = async (
  name,
  email,
  password
) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await updateProfile(
    userCredential.user,
    {
      displayName: name,
    }
  );

  await setDoc(
    doc(
      db,
      "users",
      userCredential.user.uid
    ),
    {
      uid: userCredential.user.uid,
      name,
      email,
      role: "customer",
      provider: "email",
      createdAt: serverTimestamp(),
    }
  );

  return userCredential.user;
};

export const loginUser = (
  email,
  password
) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const loginWithGoogle =
  async () => {
    const result =
      await signInWithPopup(
        auth,
        googleProvider
      );

    await setDoc(
      doc(
        db,
        "users",
        result.user.uid
      ),
      {
        uid: result.user.uid,
        name:
          result.user.displayName,
        email: result.user.email,
        role: "customer",
        provider: "google",
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );

    return result.user;
  };

export const logoutUser = () => {
  return signOut(auth);
};