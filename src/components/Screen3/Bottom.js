import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
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
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
  appBar: {
    top: "auto",
    bottom: 100,
  },
  fab: {
    width: 200,
  },
});

export class Bottom extends Component {
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
            <Grid container justify="center">
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                style={{
                  width: "40%",
                  position: "absolute",
                }}
              >
                Done
              </Fab>
            </Grid>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

Bottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottom);
