import React, { Component } from "react";
import Button from "@material-ui/core/Button";
//import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Restaurantname from "./Restaurantname";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: "20px",
    width: "40%",
  },
  input: {
    display: "none",
  },
});

export class Usertype extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ marginTop: "35%", textAlign: "center" }}>
          <div style={{ lineHeight: "2%" }}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "normal",
                fontFamily: "Big Caslon FB",
              }}
            >
              Select your profile
            </h2>
            <h6
              style={{
                color: "grey",
                textAlign: "center",
                fontWeight: "normal",
                fontFamily: "Big Caslon FB",
              }}
            >
              You can Choose Own Profile
            </h6>
          </div>
          <Link to="/Footeruser" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              //fullWidth={true}
              //size="large"
            >
              User
            </Button>
          </Link>
          <br />
          <Link to="/Restaurantname" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Restaurant
            </Button>
          </Link>
        </div>
        <h6
          style={{
            textAlign: "center",
            color: "grey",
            position: "absolute",
            bottom: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            left: "0",
            right: "0",
            fontWeight: "normal",
            fontFamily: "Big Caslon FB",
          }}
        >
          Please Complete Setup
        </h6>
      </div>
    );
  }
}

//export default Usertype;
export default withStyles(styles)(Usertype);
