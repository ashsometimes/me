import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCw0Uq_77eiVHgg1HucAJN1B1jvObwd8j8",
    authDomain: "ashsometimes-a4a45.firebaseapp.com",
    databaseURL: "https://ashsometimes-a4a45.firebaseio.com",
    projectId: "ashsometimes-a4a45",
    storageBucket: "ashsometimes-a4a45.appspot.com",
    messagingSenderId: "740433627505",
    appId: "1:740433627505:web:7c12fd43392469f28e8ed0",
    measurementId: "G-PRCPRKMGWQ"
}

const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig