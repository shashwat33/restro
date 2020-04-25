import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const styles = (theme) => ({
  root: {
    margin: "0",
    left: "0",
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: "#ff1744",
  },
  button2: {
    margin: theme.spacing.unit,
    color: "#c62828",
    bottom: 0,
  },
});

class SelectedListItem extends React.Component {
  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 0}
            onClick={(event) => this.handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <img src="ff.png" width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "15%", fontFamily: "Big Caslon FB" }}
              primary="onion paratha"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <CreateOutlinedIcon className={classes.icon} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem
            button
            selected={this.state.selectedIndex === 1}
            onClick={(event) => this.handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <img src="ff.png" width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "15%" }}
              primary="onion paratha"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <CreateOutlinedIcon className={classes.icon} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
        <Button
          className={classes.button2}
          style={{ fontVariant: "normal", fontFamily: "Big Caslon FB" }}
        >
          add menu
        </Button>
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);
