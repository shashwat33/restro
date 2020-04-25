import React, { Component } from "react";
import Usertab from "./Usertab";
import Searchbar from "./Searchbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import image from "..images/image.png";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a",
    },
    secondary: {
      main: "#263238",
    },
  },
});
// const styles = {
//   root1: {
//     width: "100%",
//     position: "fixed",
//     bottom: "0",
//     marginLeft: "auto",
//     marginRight: "auto",
//     left: "0",
//     right: "0",
//     zIndex: "999",
//   },
// };

class Userexplore extends Component {
  // state = {
  //   value: 0,
  // };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };
  render() {
    // const { classes } = this.props;
    // const { value } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div
            style={{
              position: "fixed",
              zIndex: "999",
              top: "0",
              height: "25px",
              width: "100%",
              left: "0",
            }}
          >
            <Searchbar />
          </div>
          <div
            style={{
              marginTop: "10px",
              height: "calc(100vh - 205px)",
              position: "fixed",
              zIndex: "999",
              width: "100%",
              top: "12%",
            }}
            // style={{
            //   // marginTop: "10%",
            //   position: "fixed",
            //   zIndex: "999",
            //   top: "20%",
            //   height: "25px",
            //   width: "100%",
            //   left: "0",
            // }}
          >
            <Usertab />
          </div>
          {/* <div style={{ position: "absolute", bottom: "0" }}> */}
          {/* <div>
          <MuiThemeProvider theme={theme}>
            <BottomNavigation
              value={value}
              onChange={this.handleChange}
              showLabels
              className={classes.root1}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeOutlinedIcon />}
              />
              <BottomNavigationAction
                label="Order"
                icon={<ListOutlinedIcon />}
              />
              <BottomNavigationAction
                label="Profile"
                icon={<SentimentSatisfiedOutlinedIcon />}
              />
            </BottomNavigation>
          </MuiThemeProvider>
        </div> */}
        </div>
      </MuiThemeProvider>
    );
  }
}
// Userexplore.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Userexplore;
