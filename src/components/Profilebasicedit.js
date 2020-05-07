import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";
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

export class Profilebasicedit extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     const db = firebase.firestore();
  //     var docRef = db.collection("Restaurant");

  //     docRef
  //       .doc(user.uid)
  //       .get()
  //       .then(function (doc) {
  //         console.log("SHASHHHHHHHHHHHHHHHHHHHHHHHHHHHWAAATTTTTTTT");
  //         console.log(doc.data());
  //       });
  //   });
  // }
  constructor() {
    super();
    this.state = {
      phonenumber: "",
      address: "",
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    firebase.auth().onAuthStateChanged((user) => {
      // const db = firebase.firestore();
      // console.log("user ", user.uid);
      // var docRef= db.collection("Restaurant").where("userid", "==", user.uid);
      
      // // console.log("doc", docRef);
      // docRef
      //   .set(
      //     {
      //       address: this.state.address,
      //      phonenumber: this.state.phonenumber,
      //       name: this.state.name,
      //     })
      const db = firebase.firestore();

      let collectionRef = db.collection('Restaurant');

// collectionRef.where('userid', '==', user.uid).get().then(querySnapshot => {
//   querySnapshot.forEach(documentSnapshot => {
//     console.log(`Found document at ${documentSnapshot.ref.path}`);
collectionRef.where('userid', '==', user.uid).get().then(e=>e.docs[0].ref.set(
  {
    address: this.state.address,
    phonenumber: this.state.phonenumber,
     name: this.state.name,
   },{merge:true}))


  

        
        // console.log(refs());
          // snapshot.refs().set({
          //  address: this.state.address,
          //    phonenumber: this.state.phonenumber,
          //    name: this.state.name,
          
          // })
        // .catch((err) => console.log(2, err));
    });
  
}


  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridListTileBar
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          titlePosition="top"
          actionIcon={
            <Link to="Footer" style={{ textDecoration: "none" }}>
              <IconButton
                style={{
                  color: "#ff1744",
                  position: "sticky",
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          }
          actionPosition="left"
        />
        <MuiThemeProvider theme={theme}>
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <span
              style={{
                marginRight: "30%",
                fontSize: "32px",
                fontFamily: "Big Caslon FB",
              }}
            >
              Edit Details
            </span>
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />

            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Phone Number"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              name="phonenumber"
              value={this.state.phonenumber}
              onChange={this.handleChange}
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",

                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Address"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Category"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Hours"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
          </div>


          <Link to="Footer" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                this.handleSubmit();
              }}
              style={{
                position: "absolute",
                bottom: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
              }}
            >
              Done
            </Button>
          </Link>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Profilebasicedit);
