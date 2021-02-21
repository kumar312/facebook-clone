import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzl082zZuG80mgqFQxYFkcWDkbspnf88A",
    authDomain: "fb-clone-e349b.firebaseapp.com",
    databaseURL: "https://fb-clone-e349b.firebaseio.com",
    projectId: "fb-clone-e349b",
    storageBucket: "fb-clone-e349b.appspot.com",
    messagingSenderId: "175506635647",
    appId: "1:175506635647:web:86cf40dd787a2f49e0f84a",
    measurementId: "G-47EZ8NXE3D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;