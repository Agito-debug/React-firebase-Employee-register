import firebase from 'firebase/app';
import 'firebase/database';







var firebaseConfig = {
    apiKey: "AIzaSyA5j8uguLJnBJQJrtGjj0aOpcJXv8UwAWU",
    authDomain: "react-employee-1285b.firebaseapp.com",
    databaseURL: "https://react-employee-1285b-default-rtdb.firebaseio.com",
    projectId: "react-employee-1285b",
    storageBucket: "react-employee-1285b.appspot.com",
    messagingSenderId: "1054671840168",
    appId: "1:1054671840168:web:d9d4dae3dcba420e76b39d"
};
// Initialize Firebase
//Objected needed to make a reference o our database
//then we export to Contacts
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();