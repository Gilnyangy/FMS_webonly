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

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

/**
 * firestore: it request await function
 */
class firebaseDB {
  /**
   * firebase db get
   * @param {string} group what group want to db
   * @param {string} category what content want to db
   * @returns json data
   */
  async get(group, category) {
    const docRef = doc(db, group, category);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
}

console.log(await new firebaseDB().get("sunrincat", "feed"));

export { firebaseDB };
