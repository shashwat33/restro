import React, { Component } from "react";
import firebase, { database } from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { Redirect } from "react-router-dom";

//import axios from "axios";

firebase.initializeApp({
  apiKey: "AIzaSyA5DJuByaacL4FrIXpCLKfYLLFH6wvAlDI",
  authDomain: "restro-3e0a1.firebaseapp.com",
  databaseURL: "https://restro-3e0a1.firebaseio.com",
  projectId: "restro-3e0a1",
  storageBucket: "restro-3e0a1.appspot.com",
  messagingSenderId: "787634875792",
  appId: "1:787634875792:web:57ccd208c52a90a22dd715",
});
class Firebaselogin extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
      const db = firebase.firestore();
      var docRef = db.collection("User");
      docRef
        .doc(user.uid)
        .get()
        .then(function (doc) {
          console.log("Checking Data");
          console.log(doc);
          if (doc.exists) {
            docRef.doc(user.uid).set({
              Email: user.email,
              Name: user.displayName,
              PhotoUrl: user.photoURL,
              uid: user.uid,
            });
            console.log("Document data:", doc.data());
          } else {
            docRef.doc(user.uid).set({
              Email: user.email,
              Name: user.displayName,
              // "Phone Number": "1234",
              PhotoUrl: user.photoURL,
              uid: user.uid,
            });
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    });
  };
  // <img alt="profile picture"
  //               src={firebase.auth().currentUser.photoURL}
  //             />
  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            {/* <div></div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            {firebase.auth().currentUser.email} */}
            <Redirect to="/usertype" />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Firebaselogin;
