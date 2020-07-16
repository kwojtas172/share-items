// import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBFG2h8-ZrjKdOopOpctDZLuaFPlXUHJvk",
    authDomain: "share-items.firebaseapp.com",
    databaseURL: "https://share-items.firebaseio.com",
    projectId: "share-items",
    storageBucket: "share-items.appspot.com/server.json",
    messagingSenderId: "967996621841",
    appId: "1:967996621841:web:fdee3d8be56d3514b59db0",
    measurementId: "G-40MQDR0GM6"
  };
  
  
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const server = firebaseApp.database().ref('share-items');
// server.on("value", function(data) {
//     console.log(data.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });


// const firebaseRegister = (email, password) => {
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage)
//   });
// }

// const firebaseLogin = (email, password) => {
//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage)
//   });
// }


// let displayName;

// const firebaseAuth = () => {firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     displayName = user.email
//   } else {
//     // User is signed out.
//     // ...
//   }
// });
// }

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     displayName = user.email
//   } else {
//     // User is signed out.
//     // ...
//   }
// });





export {firebaseConfig};