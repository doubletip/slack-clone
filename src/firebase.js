import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyBuVdaNBRNtLhsPcbDahAElWhZllGv8dHQ",
	authDomain: "slack-clone-7662b.firebaseapp.com",
	projectId: "slack-clone-7662b",
	storageBucket: "slack-clone-7662b.appspot.com",
	messagingSenderId: "140792151143",
	appId: "1:140792151143:web:7278016a884bbc7f7168c2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider }
  export default db;
