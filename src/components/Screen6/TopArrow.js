import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import UserIdentity from "./UserIdentity";
import { Link } from "react-router-dom";

export default class TopArrow extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <GridListTileBar
          position="fixed"
          style={{
            backgroundColor: "transparent",
            position: "sticky",
            color: "black",
          }}
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
        <UserIdentity />
        <GridListTileBar
          position="fixed"
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          actionIcon={<h1 style={{ marginLeft: 15 }}>Menu Item</h1>}
          actionPosition="left"
        />
      </MuiThemeProvider>
    );
  }
}
