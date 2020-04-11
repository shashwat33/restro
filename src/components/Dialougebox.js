import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const styles = (theme) => ({
  shash: {
    "div > div": { borderRadius: "30%", backgroundColor: "red" },
  },
});

export class Dialougebox extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open alert dialog
        </Button>

        <Dialog
          ref={(e) => {
            try {
              const target = ReactDOM.findDOMNode(e).children[2].children[0];
              target.style.borderRadius = "20px";
            } catch (e) {
              console.log(e);
            }
          }}
          id="shashwat"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="shashwat "
          className={classes.shash}
        >
          <DialogContent>
            <DialogContentText id="shashwat" style={{ color: "black" }}>
              Your profile seems incomplete can you add some details.
            </DialogContentText>
          </DialogContent>
          <Divider />{" "}
          <Grid container justify="center">
            <DialogActions style={{ padding: "0" }}>
              <Button
                onClick={this.handleClose}
                color="secondary"
                style={{ left: " -15px" }}
              >
                Ok
              </Button>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                // style={{ position: "absolute", right: "50px" }}
              />
              <Button
                onClick={this.handleClose}
                color="secondary"
                style={{ right: "-15px" }}
                autoFocus
              >
                Later
              </Button>
            </DialogActions>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Dialougebox);
