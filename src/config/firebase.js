import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUlPDzPuVCUDcUiX6w8jnoaVzvbunEq58",
    authDomain: "tasklist-6a4e5.firebaseapp.com",
    databaseURL: "https://tasklist-6a4e5-default-rtdb.firebaseio.com",
    projectId: "tasklist-6a4e5",
    storageBucket: "tasklist-6a4e5.appspot.com",
    messagingSenderId: "326059175576",
    appId: "1:326059175576:web:f5135ed318c11226796aed",
    measurementId: "G-LLC0PPFDEB"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

