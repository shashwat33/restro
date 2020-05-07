import React, { Component } from "react";
import "./Profile.css";
import PropTypes from "prop-types";
//import Section1 from "./Section1";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

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
    position: "absolute",
    right: "0",
    top: "33%",
    textTransform: "capitalize",
    fontSize: "15px",
  },
  button2: {
    margin: theme.spacing.unit,
    color: "#c62828",
    bottom: 0,
  },
});

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: "100%" }}>
          <img src="ww.jpg" class="image1" />

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
          <div className="loginbox">
            <ListItemText
              style={{ margin: "center", marginTop: "13%" }}
              primary="Anju bisen"
              secondary={
                <React.Fragment>
                  <Typography variant="body2">anju@gmail.com</Typography>
                  {" phone no."}
                </React.Fragment>
              }
            />

            <img src="d.png" class="icon1" />
            <br></br>
            <Link to="/Profilebasicedit" style={{ textDecoration: "none" }}>
              <Button
                className={classes.button2}
                font-variant="normal"
                style={{
                  position: "fixed",
                  zIndex: "999",
                  bottom: "50px",
                  height: "25px",
                  width: "100%",
                  left: "0",
                  backgroundColor: "transparent",
                  textTransform: "capitalize",
                  fontSize: "15px",
                }}
              >
                edit profile
              </Button>
            </Link>
            {/* </div> */}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Profile);
