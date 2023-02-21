//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBryTLgQXyPh0AXVaMJ1VndjnLa3PuqyFY",
    authDomain: "fir-a7972.firebaseapp.com",
    projectId: "fir-a7972",
    storageBucket: "fir-a7972.appspot.com",
    messagingSenderId: "344960898006",
    appId: "1:344960898006:web:f519f4be5b950c4d528a77"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();