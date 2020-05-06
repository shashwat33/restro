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
import { storage, docRefRestaurant } from "../firebase";
import firebase from "../firebase";

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
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      Urlpic: "",
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
              docRefRestaurant.doc("image").set({
                backgroundpicurl: url,
              });
            });
          });
      }
    );
  };
  componentWillMount = () => {
    //
    // docRefRestaurant
    //   .doc("images")
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach((doc) => {
    //       console.log("gkjbbbbbbbbbbbbbxcvbnm,.");
    //       // wholeData.push(doc.data());
    //     });
    //   })
    var query = docRefRestaurant.doc("image");
    query.get().then((querySnapshot) => {
      const url = [];
      const data = querySnapshot.data();
      url.push(data);
      console.log(url);
      this.setState({ Urlpic: url });
    });
    // .then((snapshot) => {
    //   snapshot.forEach(() => {
    //     console.log("gkjbbbbbbbbbbbbbxcvbnm,.");
    //   });

    //  this.setState({ Urlpic: Backgroundpic });
    //console.log(this.state.Urlpic);
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
            <img
              src={this.state.Urlpic.backgroundpicurl || "ww.jpg"}
              class="image"
            />

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
          <div className="loginbox">
            <div style={{ marginTop: 34, fontFamily: "Big Caslon FB" }}>
              <h4>anju bisen</h4>

              <img src="d.png" class="icon" />
              <br></br>
              <div className="tab">
                <Section1 />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Menu);
