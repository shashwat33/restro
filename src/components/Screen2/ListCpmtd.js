import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { db, auth } from "../Firebase";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import AppBar from "@material-ui/core/AppBar";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  root1: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class ListCpmtd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      db.collection("Order")
        .where("status", "==", "completed")
        .get()
        .then((snapshot) => {
          const User = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            User.push(data);
          });
          this.setState({ User: User });
          //console.log(snapshot)
        })
        .catch((error) => console.log(error));
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.state.User &&
          this.state.User.map((User) => {
            return (
              <div>
                <Paper
                  className={classes.root1}
                  elevation={1}
                  style={{ padding: "0%" }}
                >
                  <List className={classes.root}>
                    <ListItem>
                      {/* <Avatar
                      style={{
                        position: "absolute",
                        padding: "2%",
                        alignContent: "left",
                      }}
                    > */}
                      <img
                        src={User.PhotoUrl}
                        style={{
                          // position: "absolute",
                          //padding: "2%",
                          // alignContent: "left",
                          borderRadius: "50%",
                          width: "18%",
                          height: "70%",
                          // marginLeft: "-2%",
                        }}
                      />
                      {/* </Avatar> */}
                      <ListItemText
                        style={{ marginLeft: "5%", marginTop: "3%" }}
                        primary={User.name}
                        secondary={User.tablenumber}
                      />
                    </ListItem>

                    <Paper square>
                      <Grid container justify="center">
                        {/* <Link to="/Profilebasicedit" style={{ textDecoration: "none" }}> */}
                        <Button
                          onClick={this.handleClose}
                          color="default"
                          style={{
                            left: " -15px",
                            textTransform: "capitalize",
                            fontSize: "15px",
                          }}
                        >
                          {" "}
                          booked today
                        </Button>
                        {/* </Link> */}
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                          // style={{ position: "absolute", right: "50px" }}
                        />
                        <Button
                          onClick={this.handleClose}
                          color="default"
                          style={{
                            right: "-15px",
                            left: " -15px",
                            textTransform: "capitalize",
                            fontSize: "15px",
                          }}
                          // autoFocus
                        >
                          Canceled order
                        </Button>
                      </Grid>
                    </Paper>
                  </List>
                </Paper>
              </div>
            );
          })}
      </div>
    );
  }
}

ListCpmtd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCpmtd);
