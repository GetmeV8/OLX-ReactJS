import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXguPUWhMOBKFPEPW70xxlb2V_aqwyofo",
  authDomain: "fir-fb9b4.firebaseapp.com",
  projectId: "fir-fb9b4",
  storageBucket: "fir-fb9b4.appspot.com",
  messagingSenderId: "1281488037",
  appId: "1:1281488037:web:f3fa4ea6679c31dfdbc94c",
  measurementId: "G-Q0ZMGTCDE7"
};

export default  firebase.initializeApp(firebaseConfig)

