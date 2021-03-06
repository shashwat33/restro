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
import { Link } from "react-router-dom";
import { auth, docRefmenu } from "../Firebase";
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
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      //{Restaurants.userid && Restaurants.restroName } ?
      docRefmenu
        .where("userid", "==", user.uid)
        .get()
        .then((snapshot) => {
          const menu = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            menu.push(data);
          });

          this.setState({ menu: menu });
          //console.log(snapshot)
        })
        .catch((error) => console.log(error));
    });
  };
  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;
    // console.log(this.props.location.restroName);
    return (
      <div className={classes.root}>
        <List component="nav">
          {this.state.menu &&
            this.state.menu.map((menuitem) => (
              <ListItem
                fullWidth={true}
                button
                selected={this.state.selectedIndex === 0}
                onClick={(event) => this.handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <img src={menuitem.PhotoUrl} width="60" height="50" />
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: "15%", fontFamily: "Big Caslon FB" }}
                  primary={menuitem.foodname}
                />
                <ListItemSecondaryAction>
                  <Link
                    to={{
                      pathname: "/Addmenu",
                      state: { menu: this.state.menu },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <IconButton aria-label="Delete">
                      <CreateOutlinedIcon className={classes.icon} />
                    </IconButton>
                  </Link>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
        <Divider />
        <Link to="/EditMenu" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button2}
            style={{
              fontVariant: "normal",
              fontFamily: "Big Caslon FB",
              position: "fixed",
              zIndex: "999",
              bottom: "38px",
              textTransform: "capitalize",
              fontSize: "15px",
              width: "100%",
              left: "0",
              backgroundColor: "transparent",
            }}
          >
            add menu
          </Button>
        </Link>
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);
