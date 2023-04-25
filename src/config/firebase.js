import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkyHVeqJ5z4pxTT1G75MM262HPBEZB-eI",
    authDomain: "to-do-list-25c37.firebaseapp.com",
    databaseURL: "https://to-do-list-25c37-default-rtdb.firebaseio.com",
    projectId: "to-do-list-25c37",
    storageBucket: "to-do-list-25c37.appspot.com",
    messagingSenderId: "435750210387",
    appId: "1:435750210387:web:1bdd148574080173bd2fa6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

