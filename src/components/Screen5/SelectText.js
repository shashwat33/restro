import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ReactDOM from "react-dom";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { db, docRefCategory, docRefmenu, storage } from "../Firebase";
import ImageUpload from "./ImageUpload";
import firebase from "../Firebase";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
// import { Link } from "react-router-dom";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing.unit * 1,
      color: "#f06292",
      // width: "95%",
    },
  },
  input: {
    borderRadius: "50px",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #f06292",
    width: "100%",
    fontFamily: "Times New Roman",
    color: "#f06292",

    //  fontVariant: "small-caps",
    fontSize: "100%",
    fontWeight: "bold",
    alignContent: "center",
    padding: "10px 26px 10px 12px",
    left: "0",
    padding: "14px",
    //right: "0",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: "50px",
      borderColor: "#f06292",
      border: "1px solid #f06292",
      color: "#f06292",
      padding: "14px",
      width: "90%",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
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
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: "50%",
    marginTop: "4%",

    // position: "absolute",
  },
  textField1: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // width: "100%",
    // position: "absolute",
    marginTop: "6%",
  },

  icon: {
    width: "10%",
    height: "10%",
    color: "grey",
    margin: "0%",
    position: "absolute",
  },
  add: {
    width: "70%",
    height: "70%",
    margin: "0%",
    // position: "absolute",
    color: "#f48fb1",
  },
  margin1: {
    borderRadius: "50%",
    //  marginLeft: "5%",
    marginRight: "0",
    marginTop: "2%",
    // height: "10%",
    width: "20%",
    padding: "1px",
    //alignContent: "right",
  },
  formControl: {},
  margin: {
    // width: "8%",
    borderRadius: "22%",
    marginRight: "0%",
    width: "11%",
    border: "1px solid #f48fb1",
    height: "20%",
    marginRight: "50%",

    padding: "5px",
    marginTop: "2%",
  },
});
// function restroName(props) {
//   return <Typography component="div">{props.children}</Typography>;
// }
export class SelectText extends Component {
  // state = {
  //   Catogary: "",
  //   labelWidth: 0,
  //   Name: "",
  //   Price: "",
  // };
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      image: null,
      Urlpic: "",
      progress: 0,
      Catogary: "",
      labelWidth: 0,
      Name: "",
      Price: "",
      Image: "",
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
            this.setState({ Urlpic: url });
            console.log("jhsgc");
          });
      }
    );
  };
  handleUpload = (e) => {
    // e.preventDefault();
    // console.log(e);
    // const { image } = this.state;
    // const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // progress function ...
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     this.setState({ progress });
    //   },
    //   (error) => {
    //     // Error function ...
    //     console.log(error);
    //   },
    //   () => {
    //     // complete function ...
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         this.setState({ url });
    //         console.log(url);
    //         // const { Urlpic } = this.state;
    //         this.setState({ Urlpic: url });
    //         console.log("jhsgc");
    //       });
    //   }
    // );
  };
  componentWillMount = () => {
    //   var query = docRefCategory.doc("123");
    //   query.get().then((querySnapshot) => {
    //     const category = [];
    //     const data = querySnapshot.data();
    //     category.push(data);
    //     console.log(category);
    //   });
    // };
    var query = docRefCategory.doc("123");
    query.get().then((querySnapshot) => {
      const category = [];
      const data = querySnapshot.data();
      category.push(data);
      console.log(category);
    });
  };
  //let docs = querySnapshot.docs;
  //     if (querySnapshot.empty) {
  //       console.log("No documents found.");
  //     } else {
  //       console.log(("Document found at path": docs));
  //     }
  //   });
  // };
  // componentWillMount = () => {
  //   docRefCategory
  //     .get()
  //     .then((snapshot) => {
  //       const category = [];
  //       snapshot.forEach((doc) => {
  //         const data = doc.data();
  //         category.push(data);
  //       });
  //       this.setState({ category: category });
  //       //console.log(snapshot)
  //     })
  //     .catch((error) => console.log(error));
  // };

  componentDidMount() {
    this.setState({
      //labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }
  handleSubmit = (event) => {
    // Image.map((Image) =>
    //   Object.assign(Image, {
    //     preview: URL.createObjectURL(Image),
    //     // saurce se target me means url create krke preview fir pic m upload kiye
    //   })
    // );
    // this.setState({ Image: Image.preview });
    // console.log(this.state);
    docRefmenu.doc().set({
      Category: this.state.Category,
      foodname: this.state.Name,
      price: this.state.Price,
      PhotoUrl: this.state.Urlpic,
      restroName: "this.props,",

      //userId: ""
    });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handle = (e) => {
  //   this.setState({ Name: e.target.value });
  //   console.log(this.Name);
  //   console.log("komallllllllllllllllllllllllllllllll");
  // };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div style={{ marginLeft: "3%", margimRight: "3%", marginTop: "5%" }}>
            {/* {this.state.category &&
              this.state.category.map((category) => {
                return (
                  <div> */}
            <form autoComplete="off">
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth={true}
              >
                <InputLabel
                // ref={(ref) => {
                //   this.InputLabelRef = ref;
                // }}
                //   htmlFor="outlined-age-simple"
                >
                  Select Category
                </InputLabel>

                <Select
                  //  value={this.state.Category}
                  onChange={this.handleChange}
                  name="Category"
                  input={
                    <BootstrapInput
                      labelWidth={this.state.labelWidth}
                      name="Catogary"
                      margin="dense"
                    />
                  }
                >
                  {this.state.category &&
                    this.state.category.map((item) => (
                      <option value={item.categoryname}>
                        {item.categoryname}
                      </option>
                    ))}
                  {/* <option value="" /> */}
                  {/* <option value="" /> */}
                  {/* <option value={10}>Ten</option> */}
                  {/* <option value={30}>Sweets</option> */}
                </Select>

                <TextField
                  className={classes.textField1}
                  fullWidth="true"
                  // id="outlined-error"
                  //label="Error"
                  placeholder="Name"
                  margin="normal"
                  variant="outlined"
                  //  value={this.state.Name}
                  name="Name"
                  onChange={this.handleChange}
                  // deafultValue={values.Name}
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
                    style: {
                      borderRadius: "20px",
                      borderColor: "#E91E63",
                    },
                  }}
                />
                <div
                  style={
                    {
                      // display: "inline-flex",
                    }
                  }
                >
                  <TextField
                    // id="outlined-error"
                    //label="Error"
                    name="Price"
                    placeholder="Price"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    // inputProps={{ style: { borderRadius: "20px" } }}
                    onChange={this.handleChange}
                    InputProps={{
                      inputProps: {
                        style: {
                          borderRadius: "20px",
                          padding: "10px",
                          color: "#E91E63",
                          border: "1px solid #ff1744",
                        },
                      },
                      style: {
                        borderRadius: "20px",
                        borderColor: "#E91E63",
                      },
                    }}
                  />
                  <div>
                    {/* <progress
                      value={this.state.progress}
                      max="100"
                      className="progress"
                    /> */}
                  </div>

                  <div className="file-field input-field">
                    <div className={classes.margin}>
                      <label for="files" class="btn">
                        <ImageOutlinedIcon className={classes.icon} />
                      </label>
                      <input
                        id="files"
                        style={{ visibility: "hidden" }}
                        type="file"
                        onChange={this.handleUpdate}
                      />
                    </div>
                  </div>

                  {/* <Button
                    variant="outlined"
                    color="primary"
                    className={classes.margin}
                  >
                    {" "}
                    <ImageOutlinedIcon className={classes.icon} />
                  </Button> */}
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className={classes.margin1}
                  >
                    <AddIcon className={classes.add} />
                  </Button>
                </div>
              </FormControl>
            </form>
            {/* </div>
                );
              })} */}
          </div>
          <AppBar
            position="fixed"
            overflow="hidden"
            color="transparent"
            style={{ top: "auto", bottom: 100 }}
          >
            <Grid container justify="center">
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                onClick={this.handleSubmit}
                style={{
                  width: "40%",
                  position: "absolute",
                }}
              >
                Done
              </Fab>
            </Grid>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(SelectText);
