import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import User from "./User.jpg";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function UserIdentity(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar
          style={{ position: "absolute", padding: "2%", alignContent: "left" }}
        >
          <img src={User} style={{ position: "absolute" }} />
        </Avatar>
        <ListItemText
          style={{ marginLeft: "22%", marginTop: "3%" }}
          primary="Anju Bisen"
          secondary="Table no. 21"
        />
      </ListItem>
    </List>
  );
}

UserIdentity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserIdentity);
