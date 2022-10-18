import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdv8mfKpAPf-S7I5RDt4L9FIgE6qEm9D8",
  authDomain: "react-authentication-ccef4.firebaseapp.com",
  projectId: "react-authentication-ccef4",
  storageBucket: "react-authentication-ccef4.appspot.com",
  messagingSenderId: "553457993593",
  appId: "1:553457993593:web:ca84de5cd21d88bec251a8",
  measurementId: "G-QHD235EWR3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;