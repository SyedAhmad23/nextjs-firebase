import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCd8HzkshzT34_fYdHb-W6Sy68-iaO9UP8",
    authDomain: "fir-user-446fb.firebaseapp.com",
    projectId: "fir-user-446fb",
    storageBucket: "fir-user-446fb.appspot.com",
    messagingSenderId: "87920996375",
    appId: "1:87920996375:web:14890d36259c8d8b04ac52",
    measurementId: "G-KHH0CDGFE7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 
