import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Sectionmenu from "./Sectionmenu";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

function TabContainer1(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer1.propTypes = {
  children: PropTypes.node.isRequired,
};

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Big Caslon FB",
  },
  button2: {
    margin: theme.spacing.unit,
    color: "#c62828",
    bottom: 0,
  },
});

class SimpleTabs extends React.Component {
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
      <div className={classes.root} id="scroll">
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={this.handleChange}
            centered={true}
            style={{ fontFamily: "Big Caslon FB" }}
          >
            <Tab label="Basic" />
            <Tab label="Menu" />
            <Tab label="Table" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer1 style={{ padding: 7 * 5 }}>
            {/* <span style={{ fontFamily: "Big Caslon FB" }}>
              village cafe,shankr nagar raipur phone no. 9304786790.
            </span>  */}
            <condition />
            <Link to="/Profilebasicedit" style={{ textDecoration: "none" }}>
              <Button
                className={classes.button2}
                style={{
                  fontVariant: "normal",
                  fontFamily: "Big Caslon FB",
                  position: "fixed",
                  zIndex: "999",
                  bottom: "50px",
                  height: "25px",
                  width: "100%",
                  left: "0",
                  backgroundColor: "transparent",
                  textTransform: "capitalize",
                  fontSize: "15px",
                }}
              >
                edit profile
              </Button>
            </Link>
          </TabContainer1>
        )}
        {value === 1 && (
          <div style={{ overflowY: "auto", height: "calc(100vh - 495px)" }}>
            <TabContainer>
              <Sectionmenu />
            </TabContainer>
          </div>
        )}
        {value === 2 && <TabContainer></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
