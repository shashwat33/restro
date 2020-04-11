import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Bottom } from "./Bottom";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff7043",
      marginBottom: "10",
    },
  },
});
export class Top extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <GridListTileBar
          position="fixed"
          style={{
            backgroundColor: "transparent",
            position: "sticky",
            color: "black",
          }}
          actionIcon={
            <IconButton>
              <ArrowBackIcon color="primary" />
            </IconButton>
          }
          actionPosition="left"
        />
        <GridListTileBar
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          margin="1%"
          actionIcon={<h1 style={{ marginLeft: 7 }}>Edit Menu</h1>}
          actionPosition="left"
        />
      </MuiThemeProvider>
    );
  }
}
