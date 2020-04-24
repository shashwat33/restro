import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff1744",
    },
  },
});
const styles = (theme) => ({
  title: {},
});

export class BottomPay extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <GridListTileBar
          style={{
            backgroundColor: "transparent",
          }}
          titlePosition="bottom"
          title={
            <Typography
              variant="span"
              style={{ color: "#f06292", flexGrow: "1", marginLeft: "5%" }}
            >
              Advane amount ₹50
            </Typography>
          }
          actionIcon={
            <IconButton style={{ color: "#f06292" }}>
              <span style={{ marginRight: "20%", fontSize: "90%" }}>Pay</span>

              <ArrowForwardIcon style={{ marginRight: "20%" }} />
            </IconButton>
          }
          actionPosition="Right"
        />
      </MuiThemeProvider>
    );
  }
}
BottomPay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomPay);
