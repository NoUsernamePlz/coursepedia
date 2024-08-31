/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwRoMcnnqACkMtuFsGl3luvPvBpiR3HaM",
  authDomain: "myproject-26d6d.firebaseapp.com",
  projectId: "myproject-26d6d",
  storageBucket: "myproject-26d6d.appspot.com",
  messagingSenderId: "130499809442",
  appId: "1:130499809442:web:853bd77c0c04e6f15dc7fb"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export{fireDB,auth}