import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBEKfQGjqFFRwqm4d_HRL7jrpDwfAJVBBc",
  authDomain: "my-lawyer-f9831.firebaseapp.com",
  projectId: "my-lawyer-f9831",
  storageBucket: "my-lawyer-f9831.appspot.com",
  messagingSenderId: "581844060999",
  appId: "1:581844060999:web:e3964c9f7114d87cb11a62",
  measurementId: "G-PKMLB6HDYN",
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
