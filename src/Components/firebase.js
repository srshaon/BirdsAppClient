// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8R4a7d-e6xagdVtvms12OOaJanhCR1To",
    authDomain: "birdsapp-8506c.firebaseapp.com",
    projectId: "birdsapp-8506c",
    storageBucket: "birdsapp-8506c.appspot.com",
    messagingSenderId: "337648104308",
    appId: "1:337648104308:web:4fcb64a3fb7e4d27907221"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}
const auth = firebase.auth();
export { auth };