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
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FoodImage from "../Images/FoodImage.jpg";
import CallIcon from "@material-ui/icons/Call";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: "0",
    left: "0",
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: "white",
    margin: "0",
    fontSize: "medium",
  },
  avatar: {
    borderRadius: "3px",
    backgroundColor: "#424242",
    top: "20",
    height: "27px",
    width: "27px",
    top: "4px",
  },
});

class UserList extends React.Component {
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
          <Link
            to="/Menuitem"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem
              fullWidth={true}
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <img src={FoodImage} width="60" height="50" />
              </ListItemIcon>
              <ListItemText
                style={{ marginLeft: "5%" }}
                primary="Manjushree"
                secondary="pure veg"
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <Avatar className={classes.avatar}>
                    <CallIcon className={classes.icon} />
                  </Avatar>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 1}
            onClick={(event) => this.handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 2}
            onClick={(event) => this.handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 3}
            onClick={(event) => this.handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 4}
            onClick={(event) => this.handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 5}
            onClick={(event) => this.handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 6}
            onClick={(event) => this.handleListItemClick(event, 6)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 7}
            onClick={(event) => this.handleListItemClick(event, 7)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 8}
            onClick={(event) => this.handleListItemClick(event, 8)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            fullWidth={true}
            button
            selected={this.state.selectedIndex === 9}
            onClick={(event) => this.handleListItemClick(event, 9)}
          >
            <ListItemIcon>
              <img src={FoodImage} width="60" height="50" />
            </ListItemIcon>
            <ListItemText
              style={{ marginLeft: "5%" }}
              primary="Manjushree"
              secondary="pure veg"
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <Avatar className={classes.avatar}>
                  <CallIcon className={classes.icon} />
                </Avatar>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
      </div>
    );
  }
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
