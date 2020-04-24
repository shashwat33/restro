import React, { Component } from "react";
import LoginPage from "../components/LoginPage";
import withFirebase from "../hoc/withFirebase";
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firebase, user } = this.props;
    return (
      <LoginPage
        login={firebase.googleSignIn}
        logOut={firebase.logOut}
        user={user}
      />
    );
    // return (
    //   <Login
    //     {...this.props}
    //     login={this.props.firebase.googleSignIn}
    //     logOut={this.props.logOut}
    //     anonymousLogin={this.props.signInAnonymously}
    //   />
    // );
  }
}

export default withFirebase(LoginContainer);
