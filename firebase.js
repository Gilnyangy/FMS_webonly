// Import the functions you need from the SDKs you need
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: "gilnyangy",
  storageBucket: process.env.FIREBASE_BUCKET,
  messagingSenderId: process.env.FIREBASE_ID_MESSAGINGSENDER,
  appId: process.env.FIREBASE_ID_APP,
  measurementId: process.env.FIREBASE_ID_MEASUREMENT,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function db_get(group, category) {
  const docRef = doc(db, group, category);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return none;
  }
}

export { db_get as getdb };
