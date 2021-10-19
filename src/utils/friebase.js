import firebase from 'firebase/app';
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAUXa8-g--lo2Rq8yDGxPMWPta0RKyr-00",
    authDomain: "todo-app-aefda.firebaseapp.com",
    projectId: "todo-app-aefda",
    storageBucket: "todo-app-aefda.appspot.com",
    messagingSenderId: "110953334803",
    appId: "1:110953334803:web:bc0565045efa354a4117e6",
    measurementId: "G-KE8T4VHS4B"
};

// Initialize Firebase
firebase.initializeApp(config);

const firestore = firebase.firestore()

export default { firestore }