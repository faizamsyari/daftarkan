const firebase=require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyCtbcLTTgBMq3pYRr_c1fDkHw9tyydKHDo",
  authDomain: "absensiosjur.firebaseapp.com",
  projectId: "absensiosjur",
  storageBucket: "absensiosjur.appspot.com",
  messagingSenderId: "17056414326",
  appId: "1:17056414326:web:692687277bf73f9b007d57",
  measurementId: "G-8HCSB559Q2"
};
  const User = firebase.initializeApp(firebaseConfig)
  // const db=firebase.firestore()
  // const User= db.collection("Data User")
  module.exports=User;
