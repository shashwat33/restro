import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a",
    },
  },
});
const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: "20px",
    width: "40%",
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%",
  },
});

export class Profilebasicedit extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridListTileBar
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          titlePosition="top"
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
        <MuiThemeProvider theme={theme}>
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <span
              style={{
                marginRight: "30%",
                fontSize: "32px",
                fontFamily: "Big Caslon FB",
              }}
            >
              Edit Details
            </span>
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />

            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Phone Number"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",

                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Address"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Category"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
            <TextField
              // id="outlined-error"
              //label="Error"
              placeholder="Hours"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              // inputProps={{ style: { borderRadius: "20px" } }}

              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    color: "#E91E63",
                    border: "1px solid #ff1744",
                  },
                },
                style: { borderRadius: "20px", borderColor: "#E91E63" },
              }}
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            style={{
              position: "absolute",
              bottom: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              left: "0",
              right: "0",
            }}
          >
            Done
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Profilebasicedit);
