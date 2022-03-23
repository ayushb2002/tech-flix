import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxUnytymtfzBfqdNVkoGOwFvttj3P75W4",
  authDomain: "techflix-5a088.firebaseapp.com",
  projectId: "techflix-5a088",
  storageBucket: "techflix-5a088.appspot.com",
  messagingSenderId: "994631089328",
  appId: "1:994631089328:web:dd0f1777dd1a92ab4fcf75",
  measurementId: "G-5NX07W12XV",
};

const app = getApps().length !== 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
export default app;
export { db };
