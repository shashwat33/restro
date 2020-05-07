import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Sectionmenu from "./Sectionmenu";
import Button from "@material-ui/core/Button";
import { db, auth, docRefrestaurant } from "../Firebase";

import { Link } from "react-router-dom";

function TabContainer1(props) {
  return (
    <Typography component="div" style={{ padding: 5 * 2 }}>
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
  constructor(props) {
    super(props);
    this.state = {
      RestroUser: "",
    };
  }
  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      // var docRef = db.collection("User");
      // .doc(user.uid)
      docRefrestaurant
        .where("userid", "==", user.uid)
        .get()
        .then((snapshot) => {
          const RestroUser = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            RestroUser.push(data);
          });
          this.setState({ RestroUser: RestroUser });
          console.log(snapshot);
        })
        .catch((error) => console.log(error));
    });
  };
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
            defaultActiveKey="Basic"
            value={value}
            onChange={this.handleChange}
            centered={true}
            style={{ fontFamily: "Big Caslon FB" }}
          >
            <Tab label="Basic" key="Basic" />
            <Tab label="Menu" />
            <Tab label="Table" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer1 style={{ padding: 7 * 5 }}>
            {this.state.RestroUser &&
              this.state.RestroUser.map((RestroUsers) => {
                return (
                  <div
                    style={{
                      marginTop: "0",
                      marginBottom: "0",
                      textAlign: "left",
                      fontFamily: "Big Caslon FB",
                    }}
                  >
                    <span style={{ fontFamily: "Big Caslon FB" }}>
                      {RestroUsers.restroName ? (
                        RestroUsers.restroName
                      ) : (
                        <p>Name</p>
                      )}
                      {RestroUsers.category ? (
                        RestroUsers.Name
                      ) : (
                        <p style={{ marginTop: "0", marginBottom: "0" }}>
                          Category
                        </p>
                      )}
                      {RestroUsers.hours ? (
                        RestroUsers.Name
                      ) : (
                        <p style={{ marginTop: "0", marginBottom: "0" }}>
                          Hours
                        </p>
                      )}
                      {RestroUsers.Adress ? (
                        RestroUsers.Name
                      ) : (
                        <p style={{ marginTop: "0" }}>Adress</p>
                      )}
                      {RestroUsers.restroName &&
                      RestroUsers.category &&
                      RestroUsers.hours &&
                      RestroUsers.Adress ? null : (
                        <p
                          style={{
                            color: "#E91E63",
                            flexGrow: "1",
                            textAlign: "center",
                            // fontWeight: "initial",
                            fontFamily: "Big Caslon FB",
                            marginBottom: "20%",
                          }}
                        >
                          Oops.... Your profile looks incomplete....
                        </p>
                      )}
                    </span>
                  </div>
                );
              })}
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
            <TabContainer margin="0%">
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
