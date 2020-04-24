import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export class Footer extends Component {
  render() {
    return (
      <div>
        <span
          style={{
            position: "absolute",
            top: "10%",
            left: "3%",
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "Big Caslon FB",
          }}
        >
          order request
        </span>
        <div style={{ textAlign: "center", marginTop: "50%" }}>
          <img src="image.png" alt="" />
          <div>
            <span
              /*style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                bottom: "35%",
                color: "#E91E63",
              }}*/
              style={{ color: "#E91E63", fontFamily: "Big Caslon FB" }}
            >
              Oops...There are no request{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
