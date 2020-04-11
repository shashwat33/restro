import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import UserIdentity from "./UserIdentity";

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
            <IconButton
              style={{
                color: "#ff1744",
                position: "sticky",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          }
          actionPosition="left"
        />
        <UserIdentity />
        <GridListTileBar
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
