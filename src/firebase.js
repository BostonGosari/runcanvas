import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKkLYdZ4KS2wf510x0xJua1WwquNNOHgw",
  authDomain: "run-canvas.firebaseapp.com",
  projectId: "run-canvas",
  storageBucket: "run-canvas.appspot.com",
  messagingSenderId: "80448118019",
  appId: "1:80448118019:web:398b99abfe037f9b179d36",
  measurementId: "G-9CS629G6VY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbService = getFirestore(app);
const storage = getStorage(app);

export { app, auth, dbService, storage };
