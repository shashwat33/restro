import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import UserList from "./UserList";

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
  },
});

class Usertab extends React.Component {
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
      <div className={classes.root}>
        {/* <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
        > */}
        <Tabs value={value} onChange={this.handleChange}>
          <Tab
            label="Discover"
            style={{
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="Near You"
            style={{
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          />
        </Tabs>
        {/* </AppBar> */}

        {value === 0 && (
          <div style={{ overflowY: "auto", height: "calc(100vh - 118px)" }}>
            <TabContainer margin="0%">
              <UserList />
            </TabContainer>
          </div>
        )}
        {value === 1 && <TabContainer></TabContainer>}
      </div>
    );
  }
}

Usertab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Usertab);
