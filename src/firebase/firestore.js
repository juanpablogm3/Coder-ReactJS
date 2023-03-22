import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC9awMqUfDrXuIb0D36VyqkmjZKE5ZsBvk",
    authDomain: "coderhouse-reactjs-b2ab2.firebaseapp.com",
    projectId: "coderhouse-reactjs-b2ab2",
    storageBucket: "coderhouse-reactjs-b2ab2.appspot.com",
    messagingSenderId: "12730842224",
    appId: "1:12730842224:web:204e47ef78354e24e1c8b5",  
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
