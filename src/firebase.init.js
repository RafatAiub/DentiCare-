// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVtQHCHZ-T8ufaJl0yUc1-fr14n2kmPTU",
    authDomain: "denticare-feb16.firebaseapp.com",
    projectId: "denticare-feb16",
    storageBucket: "denticare-feb16.appspot.com",
    messagingSenderId: "751607716511",
    appId: "1:751607716511:web:988048c7156efde00a60aa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;