import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import User from "./User.jpg";
import { db, auth } from "../Firebase";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class UserIdentity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
    };
  }
  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      var docRef = db.collection("User");

      // .doc(user.uid)
      docRef
        .get()
        .then((snapshot) => {
          const User = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            User.push(data);
          });
          this.setState({ User: User });
          console.log(snapshot);
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
                      primary={User.Name}
                      secondary="Table no. 21"
                    />
                  </ListItem>
                </List>
              </div>
            );
          })}
      </div>
    );
  }
}

UserIdentity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserIdentity);
