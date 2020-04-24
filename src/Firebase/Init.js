import firebase from "firebase/app";
import "firebase/firestore";
//import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Config from "./config";

class Firebase {
  constructor() {
    this.app = firebase.initializeApp(Config);
    this.auth = this.app.auth();
    this.db = this.app.firestore();
//     this.function = this.app.functions();
//     this.app
//       .firestore()
//       .enablePersistence()
//       .then(() => {
//         console.log("Persistence working!");
//       })
//       .catch((err) => {
//         if (err.code === "failed-precondition") {
//           console.log(
//             "Multiple tabs open. So, no offline persistence for you."
//           );
//         } else if (err.code === "unimplemented") {
//           console.log("Offline persistence not supported in this browser.");
//         }
//       });
//   }

  SignIn = () => {
    signInFlow = "popup",
    signInOptions = [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks = {
      signInSuccess: () => false,
    },
  };
  logOut = () => {
    this.auth.signOut()
    );
  };

  signInAnonymously = () => {
    return this.auth.signInAnonymouslyAndRetrieveData();
  };
}

export default Firebase;
