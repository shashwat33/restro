import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff1744",
    },
  },
});
const styles = (theme) => ({
  appBar: {
    top: "auto",
    bottom: "15%",
  },
});

export class ButtonAcceptReject extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar
            position="fixed"
            overflow="hidden"
            color="transparent"
            className={classes.appBar}
          >
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              style={{
                width: "43%",
                position: "absolute",
                left: "5%",
                right: "5%",
              }}
            >
              Accept
            </Fab>

            <Fab
              variant="extended"
              size="medium"
              color="default"
              borderColor="primary"
              style={{
                width: "43%",
                position: "absolute",
                right: "5%",
                color: "#ff1744",
                borderColor: "#ff1744",
              }}
            >
              Reject
            </Fab>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

ButtonAcceptReject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAcceptReject);
