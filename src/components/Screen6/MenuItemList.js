import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FoodImage from "./FoodImage.jpg";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    width: "100%",
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  button: {},
});

export class MenuItemList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <List>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",
                minHeight: "0px",
                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />

          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <img
            src={FoodImage}
            style={{
              position: "absolute",
              padding: "2%",
              alignContent: "left",
              borderRadius: "5%",
              width: "21%",
              height: "78%",
              marginLeft: "-2%",
            }}
          />
          <ListItemText
            style={{ marginLeft: "29%", marginTop: "3%" }}
            primary="Onion Paratha"
            secondary="₹121"
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",

                minHeight: "0px",

                minWidth: "0px",
                borderColor: "#ff1744",
                color: "#ff1744",
              }}
            >
              2
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

MenuItemList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuItemList);
