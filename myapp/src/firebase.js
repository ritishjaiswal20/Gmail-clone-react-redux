import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDhccqfgQUb74rSuR9NAUXrAors8geyMfA",
    authDomain: "clone-4f25e.firebaseapp.com",
    projectId: "clone-4f25e",
    storageBucket: "clone-4f25e.appspot.com",
    messagingSenderId: "609789242469",
    appId: "1:609789242469:web:88dec1e1b3dad4a9f7aa8c"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();
export{auth,provider};
export default db;