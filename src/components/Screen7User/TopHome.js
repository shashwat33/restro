import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";

export class TopHome extends Component {
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
            <Link to="/Menuitem" style={{ textDecoration: "none" }}>
              <IconButton
                style={{
                  color: "#f06292",
                  position: "sticky",
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          }
          actionPosition="left"
        />
        <GridListTileBar
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          actionIcon={
            <h1 style={{ marginLeft: "18%", fontFamily: "Big Caslon FB" }}>
              Items
            </h1>
          }
          actionPosition="left"
        />
      </MuiThemeProvider>
    );
  }
}
