// Import the functions you need from the SDKs you need
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, updateDoc } from "firebase/firestore";

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

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

/**
 * firebase db get
 * @param {string} group what group want to db
 * @returns json data
 */
async function groupInfo(group) {
  const docRef = doc(db, group, "master");
  const docSnap = await getDoc(docRef);
  return docSnap?.data();
}
async function feed(group) {
  const docRef = doc(db, group, "master");
  const docSnap = await getDoc(docRef);
  return docSnap?.data();
}

export { groupInfo };
