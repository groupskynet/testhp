import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOE5Dah7MMRoRErdZIF9aBjiFxahMTHsY",
  authDomain: "testhp-7d10d.firebaseapp.com",
  projectId: "testhp-7d10d",
  storageBucket: "testhp-7d10d.firebasestorage.app",
  messagingSenderId: "558250478844",
  appId: "1:558250478844:web:37658eee5aa069f319db79",
  measurementId: "G-SY7B61P0T3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
