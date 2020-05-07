import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ReactDOM from "react-dom";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import { db, docRefCategory, docRefmenu, auth } from "../Firebase";
import firebase from "../Firebase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing.unit * 0,
      color: "#f06292",
      width: "81%",
    },
  },
  input: {
    borderRadius: "50px",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #f06292",
    width: "100%",
    fontFamily: "Big Caslon FB",
    color: "#f06292",

    //  fontVariant: "small-caps",
    fontSize: "100%",
    fontWeight: "bold",
    alignContent: "center",
    padding: "10px 26px 10px 12px",
    left: "0",
    padding: "11px",
    right: "0",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: "50px",
      borderColor: "#f06292",
      border: "1px solid #f06292",
      color: "#f06292",
      padding: "14px",
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "79%",
  },

  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    color: theme.palette.text.primary,
  },
  formControl: {
    color: theme.palette.text.primary,
    margin: theme.spacing.unit,
    marginTop: 17,
    width: "97%",
    marginLeft: "10%",
  },
});

function handleClick() {
  alert("You clicked the Chip."); // eslint-disable-line no-alert
}
export class Profilebasicedit extends Component {
  state = {
    Catogary: "",
    labelWidth: 0,
  };
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      name: "",
      price: "",
      menu1: [],
    };
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = (event) => {
    auth.onAuthStateChanged((user) => {
      console.log("anu");
      var recievedMenu = this.props.location.state.menu;
      this.setState({ menu1: recievedMenu });
      console.log("anuuuuuuuu");
      console.log(this.state.menu1);

      docRefmenu
        .where("foodname", "==", this.state.menu1.foodname)
        .get()
        .then((snapshot) => {
          const menu = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            menu.push(data);
            console.log(data);
          });

          // this.setState({ menu: menu });
          //console.log(snapshot)
        })
        .catch((error) => console.log(error));
    });
  };

  componentWillMount = () => {
    docRefCategory
      .get()
      .then((snapshot) => {
        const category = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          category.push(data);
        });
        this.setState({ category: category });
        //console.log(snapshot)
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <GridListTileBar
            style={{
              backgroundColor: "transparent",
              position: "sticky",
            }}
            titlePosition="top"
            actionIcon={
              <Link to="/Footer" style={{ textDecoration: "none" }}>
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
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <span
              style={{
                marginRight: "40%",
                fontSize: "32px",
                fontFamily: "Big Caslon FB",
              }}
            >
              Edit Menu
            </span>
            <form autoComplete="off">
              <FormControl
                variant="outlined"
                className={classes.formControl}

                //fullWidth={true}
              >
                <InputLabel
                  ref={(ref) => {
                    this.InputLabelRef = ref;
                  }}
                  htmlFor="outlined-age-simple"
                >
                  Select Category
                </InputLabel>

                <Select
                  value={this.state.Catogary}
                  onChange={this.handleChange}
                  input={
                    <BootstrapInput
                      labelWidth={this.state.labelWidth}
                      name="Catogary"
                    />
                  }
                >
                  {this.state.category &&
                    this.state.category.map((item) => (
                      <option value={item.categoryname}>
                        {item.categoryname}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </form>

            <TextField
              // id="outlined-error"
              //label="Error"
              name="name"
              onChange={this.handleChange}
              placeholder="Name"
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
              placeholder="Price"
              name="price"
              onChange={this.handleChange}
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
            <img src="ff.png" style={{ margin: "10%" }} />
            <Link to="/Footer" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleSubmit}
                className={classes.button}
                style={{
                  position: "absolute",
                  bottom: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: "0",
                  right: "0",
                }}
              >
                Done
              </Button>
            </Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Profilebasicedit);
