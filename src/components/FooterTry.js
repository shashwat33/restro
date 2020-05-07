import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { MuiThemeProvider, createMuiTheme, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Profilebasicedit from "./Profilebasicedit";
import { NavLink } from "react-router-dom";
import HomeEmpty from "./HomeEmpty";
import Dialougebox from "./Dialougebox";
// import image from "..images/image.png";
import Order from "./Screen2/Order";
import Menu from "./Screen1/Menu";
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

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export class Footer extends Component {
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
        <Dialougebox />
        <MuiThemeProvider theme={theme}>
          <BottomNavigation value={value} showLabels className={classes.root}>
            <NavLink
              exact
              activeClassName="active"
              to="/homeempty"
              style={{ textDecoration: "none" }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeOutlinedIcon />}
              />
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/order"
              style={{ textDecoration: "none" }}
            >
              <BottomNavigationAction
                label="Order"
                icon={<ListOutlinedIcon />}
              />
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/menu"
              style={{ textDecoration: "none" }}
            >
              <BottomNavigationAction
                label="Profile"
                icon={<SentimentSatisfiedOutlinedIcon />}
              />
            </NavLink>
          </BottomNavigation>
        </MuiThemeProvider>
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
