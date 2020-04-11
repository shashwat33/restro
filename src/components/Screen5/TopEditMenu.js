import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export class TopEditMenu extends Component {
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
                color: "#ff7043",
                position: "sticky",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          }
          actionPosition="left"
        />
        <GridListTileBar
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          actionIcon={<h1 style={{ marginLeft: 7 }}>Add Menu</h1>}
          actionPosition="left"
        />
      </MuiThemeProvider>
    );
  }
}
