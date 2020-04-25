import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import User from "./Screen6/User.jpg";
// import image from "..images/image.png";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a",
    },
    secondary: {
      main: "#263238",
    },
  },
});
const styles = {
  avatar: {
    width: "35%",
    height: "55%",
    color: "grey",
  },
  root: {
    width: "80%",
    position: "absolute",
    bottom: "5px",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
  },
};

export class HomeEmpty extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <span
          style={{
            position: "absolute",
            top: "10%",
            left: "3%",
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "Big Caslon FB",
          }}
        >
          order request
        </span>
        <div style={{ textAlign: "center", marginTop: "50%" }}>
          <img src="image.png" alt="" />
          <div>
            <span
              /*style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                bottom: "35%",
                color: "#E91E63",
              }}*/
              style={{ color: "#E91E63", fontFamily: "Big Caslon FB" }}
            >
              Oops...There are no request{" "}
            </span>
          </div>
          <div>
            {/* <List>
              <ListItem>
                <Avatar
                  style={{
                    position: "absolute",
                    padding: "2%",
                    alignContent: "left",
                  }}
                >
                  <img src={User} style={{ position: "absolute" }} />
                </Avatar>
                <ListItemText
                  style={{ marginLeft: "22%", marginTop: "3%" }}
                  primary="Anju Bisen"
                  secondary={
                    <React.Fragment>
                      {" Table no. 21"}
                      <Typography
                        style={{ color: "#E91E63", fontSize: "100%" }}
                      >
                        05:00-07:00 25 April
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List> */}
          </div>
        </div>
        {/* <MuiThemeProvider theme={theme}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
            <BottomNavigationAction label="Order" icon={<ListOutlinedIcon />} />
            <BottomNavigationAction
              label="Profile"
              icon={<SentimentSatisfiedOutlinedIcon />}
            />
          </BottomNavigation>
        </MuiThemeProvider>  */}
      </div>
    );
  }
}
HomeEmpty.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeEmpty);
