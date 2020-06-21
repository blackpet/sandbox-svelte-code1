import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAwJxh_U1xaEVAeTEpChGL0erk98YP8dx0",
  authDomain: "liven-a9a53.firebaseapp.com",
  databaseURL: "https://liven-a9a53.firebaseio.com",
  projectId: "liven-a9a53",
  storageBucket: "liven-a9a53.appspot.com",
  messagingSenderId: "8252726449",
  appId: "1:8252726449:web:bd90a1702e519e7d495690",
  measurementId: "G-B0BQVTHTWL"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
