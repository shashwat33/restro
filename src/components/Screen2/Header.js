import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import List8 from "./List8";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c62828",
    },
    secondary: {
      main: "#c62828",
    },
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 4 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    fontfamily: "Big Caslon FB",
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
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar
            position="static"
            style={{
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontfamily: "Big Caslon FB",
            }}
          >
            <Tabs value={value} onChange={this.handleChange} centered={true}>
              <Tab label="Active" />
              <Tab label="Completed" />
              <Tab label="Cancaled" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <div style={{ overflowY: "auto", height: "calc(100vh - 200px)" }}>
              <TabContainer>
                <List8 />
              </TabContainer>
            </div>
          )}
          {value === 1 && (
            <div style={{ overflowY: "auto", height: "calc(100vh - 150px)" }}>
              <TabContainer>
                <List8 />
              </TabContainer>
            </div>
          )}
          {value === 2 && (
            <div style={{ overflowY: "auto", height: "calc(100vh - 150px)" }}>
              <TabContainer>
                <List8 />
              </TabContainer>
            </div>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
