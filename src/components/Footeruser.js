import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Userexplore from "./Userexplore";
import Profile from "./Screen22/Profile";
import UserOrder from "./Screen8User/UserOrder";

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
    width: "100%",
    position: "fixed",
    bottom: "0",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    zIndex: "999",
  },
};

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export class Footeruser extends Component {
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
        <MuiThemeProvider theme={theme}>
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
          {value === 0 && (
            <TabContainer>
              {" "}
              <Userexplore />{" "}
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <UserOrder />{" "}
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <Profile />{" "}
            </TabContainer>
          )}
        </MuiThemeProvider>
      </div>
    );
  }
}
Footeruser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footeruser);
