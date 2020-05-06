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
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {
  db,
  storage,
  docRefCategory,
  docRefmenu,
  docRefUser,
  auth,
  docRefrestaurant,
} from "../Firebase";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c62828",
    },

    secondary: {
      main: "#f06292",
    },
  },
});

const styles = (theme) => ({
  root: {
    margin: "0",
    left: "0",

    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: "#ff1744",
  },
});

class Menuitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      Restaurant: [],
      url: "",
      countervalue: 0,
      image: null,
      selectedMenu: this.state.foodname,
    };
    this.updatevalue = this.updatevalue.bind(this);
  }
  updatevalue() {
    this.setState({ countervalue: this.state.countervalue + 1 });
  }
  componentDidMount = () => {
    var recievedRestaurant = this.props.location.state.Restaurants;
    this.setState({ Restaurant: recievedRestaurant });
    var recievedMenu = this.props.location.state.menu;
    this.setState({ menu: recievedMenu });
    auth.onAuthStateChanged((user) => {
      //{Restaurants.userid && Restaurants.restroName } ?
      docRefmenu
        .where("restroName", "==", this.state.Restaurant.restroName)
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
  handleListItemClicklist = (e, index1) => {
    this.setState({ selectedMenu: index1 });
  };
  render() {
    const { classes } = this.props;
    {
      console.log("sssssssssssssssssssssssssssssssss");
      console.log(this.state.Restaurant);
      console.log(this.state.menu);
      console.log(this.state.Restaurant.restroName);
      console.log(this.state.clicks);
    }
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root} style={{ height: "60%" }}>
          <GridListTileBar
            style={{
              backgroundColor: "transparent",
            }}
            titlePosition="top"
            actionIcon={
              <Link to="/Footeruser" style={{ textDecoration: "none" }}>
                <IconButton style={{ top: "40" }}>
                  <ArrowBackIcon color="Primary" />
                </IconButton>
              </Link>
            }
            actionPosition="left"
          />
          <br />
          <br />
          {/* {this.props.Restaurants &&
            this.props.Restaurants.map((Restaurants) => {
              return ( */}
          <List component="nav">
            <ListItem
              fullWidth={true}
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <img
                  src={"gg.png"}
                  width="70"
                  height="70"
                  style={{ borderRadius: "15%" }}
                />
              </ListItemIcon>
              <ListItemText
                style={{ marginLeft: "15%" }}
                primary={this.state.Restaurant.restroName}
                secondary={
                  <React.Fragment>
                    <Typography variant="body2">
                      {this.state.Restaurant.address}
                    </Typography>
                    {this.state.Restaurant.Category}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <FavoriteBorderIcon className={classes.icon} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          {/* );
            })} */}
          <Divider />
        </div>

        <GridListTileBar
          style={{
            backgroundColor: "transparent",
            position: "sticky",
          }}
          margin="1%"
          actionIcon={<h2 style={{ marginLeft: 9 }}>Menu Items</h2>}
          actionPosition="left"
        />
        <div style={{ overflowY: "auto", height: "calc(100vh - 240px)" }}>
          <List component="nav">
            {this.state.menu &&
              this.state.menu.map((menuitem) => (
                <ListItem
                  fullWidth={true}
                  button
                  selected={this.state.selectedMenu === menuitem.foodname}
                  onClick={(e) =>
                    this.handleListItemClicklist(e, menuitem.foodname)
                  }
                >
                  <ListItemIcon>
                    <img src={menuitem.PhotoUrl} width="60" height="50" />
                  </ListItemIcon>
                  <ListItemText
                    style={{ marginLeft: "15%" }}
                    primary={menuitem.foodname}
                    secondary={menuitem.price}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      {/* <AddRun updatequantity={this.updatevalue} /> */}
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
        </div>

        <GridListTileBar
          style={{
            position: "fixed",
            zIndex: "999",
            bottom: "0",
            height: "25px",
            width: "100%",
            left: "0",
            backgroundColor: "transparent",
          }}
          titlePosition="bottom"
          title={
            <Typography
              style={{
                color: "#f06292",
                flexGrow: "1",
                marginLeft: "0%",
                fontWeight: "normal",
              }}
            >
              1 item rs 112 {this.state.countervalue}
            </Typography>
          }
          actionIcon={
            <Link to="/userhome" style={{ textDecoration: "none" }}>
              <IconButton color="secondary">
                <h6 style={{ marginRight: "5%", fontWeight: "normal" }}>
                  Confirm
                </h6>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          }
          actionPosition="Right"
        ></GridListTileBar>
      </MuiThemeProvider>
    );
  }
}

Menuitem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menuitem);
