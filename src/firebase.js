import firebase from 'firebase'


var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: "AIzaSyB1IICZHbEG2eurtm6iaoN2SiDmk6gEjqk",
    authDomain: "kastech-974ad.firebaseapp.com",
    projectId: "kastech-974ad",
    storageBucket: "kastech-974ad.appspot.com",
    messagingSenderId: "389041847137",
    appId: "1:389041847137:web:8209a677792971a469a320",
});


var db = firebaseApp.firestore();


export { db };