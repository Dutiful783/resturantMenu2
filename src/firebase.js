import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyBrNUeg9M-KU0VRa_zPTKzCfqwgmx-Hx1I",
  authDomain: "restuarantapp-a28bc.firebaseapp.com",
  databaseURL: "https://restuarantapp-a28bc-default-rtdb.firebaseio.com",
  projectId: "restuarantapp-a28bc",
  storageBucket: "restuarantapp-a28bc.appspot.com",
  messagingSenderId: "711889904570",
  appId: "1:711889904570:web:cc80847caaad359f0cb383"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};