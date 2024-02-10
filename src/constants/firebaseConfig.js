import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUdaQSE1F3F4WNEthk8RKTFuKOvBYgnPw",
  authDomain: "proelectro-a9a0c.firebaseapp.com",
  projectId: "proelectro-a9a0c",
  storageBucket: "proelectro-a9a0c.appspot.com",
  messagingSenderId: "242967699322",
  appId: "1:242967699322:web:2d582b41774ae5a65b80c3",
  measurementId: "G-XVW0061GCP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);