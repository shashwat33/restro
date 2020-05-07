import React, { Component } from "react";
import "./Menu.css";
import PropTypes from "prop-types";
import Section1 from "./Section1";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import { storage, docRefrestaurant, docRefUser, auth } from "../Firebase";
import firebase from "../Firebase";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c62828",
    },
  },
});

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    color: "#c62828",
    fontFamily: "Big Caslon FB",
    position: "absolute",
    left: "85%",
    top: "33%",
  },
  buttonlogout: {
    margin: theme.spacing.unit,
    color: "#c62828",
    fontFamily: "Big Caslon FB",
    left: "72%",
    borderColor: "#c62828",
  },
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      Urlpic: "",
      UserData: [],
    };
  }
  handleUpdate = (e) => {
    e.preventDefault();
    let image = "";
    if (e.target.files[0]) {
      image = e.target.files[0];
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
            console.log(url);
            // const { Urlpic } = this.state;

            console.log("jhsgc");
            firebase.auth().onAuthStateChanged((user) => {
              docRefrestaurant.doc("image").set({
                backgroundpicurl: url,
              });
            });
          });
      }
    );
  };
  componentWillMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      var queryUser = docRefUser.doc(user.uid);
      queryUser.get().then((querySnapshot) => {
        const UserData = [];
        const data = querySnapshot.data();
        UserData.push(data);
        console.log(UserData);
        this.setState({ UserData: UserData });
      });
      var query = docRefrestaurant.doc("image");
      query.get().then((querySnapshot) => {
        const url = [];
        const data = querySnapshot.data();
        url.push(data);
        console.log(url);
        this.setState({ Urlpic: url });
      });
    });
  };

  render() {
    console.log(this.state.Urlpic);
    function scrollFunction() {
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        document.getElementById("tab").style.fontSize = "30px";
      } else {
        document.getElementById("tab").style.fontSize = "90px";
      }
    }
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: "100%" }}>
          <div id="scroll">
            {this.state.Urlpic &&
              this.state.Urlpic.map((pic) => (
                <img src={pic.backgroundpicurl || "ww.jpg"} class="image" />
              ))}

            <GridListTileBar
              style={{
                backgroundColor: "transparent",
              }}
              titlePosition="top"
              actionIcon={
                <IconButton style={{ top: "40" }}>
                  <ArrowBackIcon color="Primary" />
                </IconButton>
              }
              actionPosition="left"
            />
            <Button
              onClick={() => firebase.auth().signOut()}
              className={classes.buttonlogout}
              variant="outlined"
            >
              Sign out
            </Button>
            <label for="files" class="btn" className={classes.button}>
              Edit
            </label>
            <input
              className={classes.button}
              id="files"
              style={{ visibility: "hidden" }}
              type="file"
              onChange={this.handleUpdate}
              name="edit"
            />
            {/* <Button className={classes.button}>edit</Button>  */}
          </div>
          {/* {this.state.UserData &&
            this.state.UserData.map((userdata) => ( */}
          <div className="loginbox">
            <div style={{ marginTop: 34, fontFamily: "Big Caslon FB" }}>
              <h4>{auth.currentUser.displayName}</h4>
              <h4 style={{ marginTop: "-5%" }}> {auth.currentUser.email}</h4>
              <img src={auth.currentUser.photoURL || "d.png"} class="icon" />
              <br></br>
              <div className="tab">
                <Section1 />
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </MuiThemeProvider>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Menu);
