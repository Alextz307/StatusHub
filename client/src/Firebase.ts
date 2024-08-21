import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6aY9bu6CHcMgmydOTRt6tr84SlYs3sDY",
  authDomain: "itecmonitor.firebaseapp.com",
  projectId: "itecmonitor",
  storageBucket: "itecmonitor.appspot.com",
  messagingSenderId: "297530121117",
  appId: "1:297530121117:web:89275e38fdd28d5e9b6d74",
  measurementId: "G-KZ13GT4FCW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);