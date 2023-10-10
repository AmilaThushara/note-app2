import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyBXtEMFbuklR9aZWURhmlO2yBxdk2rvB9c",
    authDomain: "notesapp-3ca65.firebaseapp.com",
    projectId: "notesapp-3ca65",
    storageBucket: "notesapp-3ca65.appspot.com",
    messagingSenderId: "256016091829",
    appId: "1:256016091829:web:4f7d7381cd7509bcdf0cfc",
    measurementId: "G-1TE0KL10W6"

}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}

export { firebase };

