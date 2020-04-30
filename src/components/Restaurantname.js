import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import firebase from "firebase";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a",
    },
  },
});
const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: "20px",
    width: "40%",
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%",
  },
});

export class Restaurantname extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    firebase.auth().onAuthStateChanged((user) => {
      const db = firebase.firestore();

      var docRef = db.collection("Restaurant");
      docRef.doc().set({
        restroName: this.state.value,
        userid: user.uid,
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div style={{ marginTop: "35%", textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  fontWeight: "normal",
                  fontSize: "35px",
                  fontFamily: "Big Caslon FB",
                }}
              >
                Hello Restaurant
              </span>
              <span
                style={{
                  color: "grey",
                  alignItems: "center",
                  width: "70%",
                  overflowX: "hidden",
                  fontFamily: "Big Caslon FB",
                }}
              >
                Can you tell me the name of your Restaurant?
              </span>
            </div>
            {/* <br /> */}
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={this.state.value}
              onChange={this.handleChange}
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    borderColor: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <Link to="/Footer" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.handleSubmit}
              >
                Done
              </Button>
            </Link>
          </div>
          <h6
            style={{
              textAlign: "center",
              color: "grey",
              position: "absolute",
              bottom: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              left: "0",
              right: "0",
              fontFamily: "Big Caslon FB",
            }}
          >
            Please Complete Setup
          </h6>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Restaurantname);
