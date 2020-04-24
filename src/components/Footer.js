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
import Profilebasicedit from "./Profilebasicedit";
import HomeEmpty from "./HomeEmpty";
import Dialougebox from "./Dialougebox";
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
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
              <HomeEmpty />{" "}
            </TabContainer>
          )}
          {value === 1 && <TabContainer>hello2</TabContainer>}
          {value === 2 && <TabContainer> </TabContainer>}
        </MuiThemeProvider>
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
