import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FoodImage from "./FoodImage.jpg";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IncrementDecrement from "./IncrementDecrement";
//import AddRun from './AddRun'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f06292",
    },
  },
});

const styles = (theme) => ({
  root: {
    width: "100%",
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    color: theme.palette.text.primary,
    marginLeft: "5%",
    marginRight: 0,
    //marginTop: "2%",
    width: "28%",
    height: "3%",
    /*"&:placeholder" {
      color: "red",
      textAlign: "center",
    },*/
  },
  button: {},
  btn: {
    backgroundColor: " #2196F3",
    color: "white",
    padding: "16px",
    fontSize: "16px",
  },

  divv: {},
  incdec: {
    marginRight: "2%",
  },
});

export class ItemDetails extends Component {
  /*
   <input className="inputne" value={this.state.quantity} />*/
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ overflowY: "auto", height: "calc(100vh - 146px)" }}>
          <List>
            <ListItem>
              <img
                src={FoodImage}
                style={{
                  position: "absolute",
                  padding: "2%",
                  alignContent: "left",
                  borderRadius: "5%",
                  width: "19%",
                  height: "73%",
                  marginLeft: "-2%",
                }}
              />

              <ListItemText
                style={{ marginLeft: "31%", marginTop: "3%" }}
                primary="Onion Paratha"
                secondary="₹112"
              />
              <ListItemSecondaryAction>
                <IncrementDecrement />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                style={{ marginTop: "3%" }}
                primary={
                  <Typography style={{ color: "#f06292" }}>Table</Typography>
                }
                secondary="Available 5"
              />
              <ListItemSecondaryAction>
                <IncrementDecrement />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem style={{ marginTop: "-2%", color: "#f06292" }}>
              <ListItemText primary="Time" />
              <TextField
                color="primary"
                placeholder="from"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                InputProps={{
                  inputProps: {
                    style: {
                      borderRadius: "25px",
                      padding: "5px",
                      color: "#E91E63",
                      borderColor: "primary",
                      border: "1px solid #f06292",
                      textAlign: "center",
                    },
                  },
                  style: { borderRadius: "20px", borderColor: "primary" },
                }}
              />
              <TextField
                color="primary"
                placeholder="to"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                InputProps={{
                  inputProps: {
                    style: {
                      borderRadius: "25px",
                      padding: "5px",
                      color: "#E91E63",
                      borderColor: "primary",
                      border: "1px solid #f06292",
                      textAlign: "center",
                    },
                  },
                  style: {
                    borderRadius: "20px",
                    borderColor: "primary",
                    marginRight: "0%",
                  },
                }}
              />
            </ListItem>
            <Divider variant="middle" style={{ marginTop: "2%" }} />
            <ListItem>
              <ListItemText
                style={{ marginTop: "3%", color: "#f06292" }}
                primary="Item Total"
              />
              <ListItemSecondaryAction style={{ marginRight: "4%" }}>
                <span style={{ color: "#f06292", fontSize: "90%" }}>₹112</span>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem style={{ marginTop: "-4%" }}>
              <ListItemText
                style={{ color: "#f06292" }}
                primary="Advance Charge"
              />
              <ListItemSecondaryAction style={{ marginRight: "4%" }}>
                <span
                  style={{
                    color: "#f06292",
                    fontSize: "90%",
                  }}
                >
                  ₹50
                </span>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="middle" />
            <ListItem style={{ marginTop: "-2%" }}>
              <ListItemText
                style={{ marginTop: "3%", color: "#f06292" }}
                primary="Grand Total"
              />
              <ListItemSecondaryAction style={{ marginRight: "4%" }}>
                <span style={{ color: "#f06292", fontSize: "90%" }}>₹162</span>
              </ListItemSecondaryAction>
            </ListItem>
          </List>{" "}
        </div>
      </MuiThemeProvider>
    );
  }
}

ItemDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemDetails);
