import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO6yp2gky1qN2IZjfBJbvVrsR7ZTHHNVI",
  authDomain: "facebook-react-8ece3.firebaseapp.com",
  projectId: "facebook-react-8ece3",
  storageBucket: "facebook-react-8ece3.appspot.com",
  messagingSenderId: "998186095317",
  appId: "1:998186095317:web:531c7cedf5be5dcf37485c",
  measurementId: "G-Y85B2P3K5Q",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
