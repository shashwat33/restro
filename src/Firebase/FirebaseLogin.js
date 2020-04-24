import React, { Component } from "react";
import firebase, { database } from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import UserHome from "../components/Screen7User/UserHome";
import Config from "./Config";
//import axios from "axios";

firebase.initializeApp(Config);
class FirebaseLogin extends Component {
  state = { isSignedIn: false };
  SignIn = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  logOut = () => {
    firebase.auth.signOut();
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });

      console.log("user", user);
      const db = firebase.firestore();
      var docRef = db.collection("User");

      docRef
        .doc(user.email)
        .get()
        .then(function (doc) {
          console.log("Checking Data");
          console.log(doc);
          if (doc.exists) {
            docRef.doc(user.email).update({
              PhotoUrl: user.PhotoUrl,
              Name: user.displayName,
            });
            console.log("Document data:", doc.data());
          } else {
            docRef.doc(user.email).set({
              Email: user.email,
              Name: user.displayName,
              // "Phone Number": "1234",
              PhotoUrl: user.photoURL,
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
            <div>{/* <UserHome /> */}</div>
            <button onClick={this.props.logOut}>Sign out!</button>
            {/* <h1>Welcome {firebase.auth().currentUser.displayName}</h1> */}
            {/* {firebase.auth().currentUser.email} */}
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.SignIn}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default FirebaseLogin;
