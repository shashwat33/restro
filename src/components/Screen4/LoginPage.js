import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import "./Design.css";
import Grid from "@material-ui/core/Grid";
import img from "./img.jpg";
import ListItemText from "@material-ui/core/ListItemText";
<<<<<<< HEAD
import Firebaselogin from "../Firebaselogin";

=======
import Fab from "@material-ui/core/Fab";
import FirebaseLogin from "../Firebaselogin";
>>>>>>> Komal4
const styles = (theme) => ({
  margin: {
    marginTop: "3%",
    borderRadius: "30%",
  },

  input: {
    display: "none",
  },
});
export class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider>
        <div className="Base">
          <img src={img} className="Image" />
          <Grid container justify="center">
            <span
              style={{
                color: "white",
                position: "absolute",
                fontSize: "65px",
                bottom: "48%",
                //fontWeight: "bold",
              }}
            >
              restro
            </span>
          </Grid>
          <div className="Basic">
            <h2
              style={{
                marginTop: "8%",
                marginBottom: "0%",
                fontSize: "33px",
                fontWeight: "inherit",
              }}
            >
              Welcome Back
            </h2>
            <ListItemText
              style={{ marginTop: "1%", fontWeight: "4" }}
              secondary=" Login to your account"
            />
            <Grid container justify="center">
<<<<<<< HEAD
              <Firebaselogin
=======
              <FirebaseLogin
>>>>>>> Komal4
                style={{
                  width: "43%",
                  position: "absolute",
                  marginTop: "10%",
                  borderRadius: "30%",
                }}
              />
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);
