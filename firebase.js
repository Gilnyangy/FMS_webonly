const dotenv = require("dotenv");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, getDoc, updateDoc } = require("firebase/firestore");

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
async function getfeed(group) {
  const docRef = doc(db, group, "feed");
  const docSnap = await getDoc(docRef);
  return docSnap?.data();
}
async function updatefeed(group, json) {
  const docRef = doc(db, group, "feed");
  await updateDoc(docRef, json);
}

export { groupInfo, getfeed, updatefeed };
