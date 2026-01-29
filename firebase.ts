import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnhZpACuFlfk6PNUKMXiJWQc-ZFshQHGs",
  authDomain: "lyra-digital.firebaseapp.com",
  projectId: "lyra-digital",
  storageBucket: "lyra-digital.appspot.com",
  messagingSenderId: "149974165319",
  appId: "1:149974165319:web:9d014bf127322b9702ce62"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
