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
    right: "0",
    top: "33%",
  },
  button2: {
    margin: theme.spacing.unit,
    color: "#c62828",
    bottom: 0,
  },
});

class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: "100%" }}>
          <img src="ww.jpg" class="shukla" />

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
          <Button className={classes.button}>edit</Button>
          <div className="login">
            <div style={{ marginTop: 50, fontFamily: "Big Caslon FB" }}>
              <h4>anju bisen</h4>
              <img src="d.png" class="icon" />
              <br></br>
              <div className="ss">
                <Section1 />
                <Button
                  className={classes.button2}
                  style={{ fontVariant: "normal", fontFamily: "Big Caslon FB" }}
                >
                  add menu
                </Button>
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
