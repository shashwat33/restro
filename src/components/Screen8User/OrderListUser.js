import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import FoodImage from "../Screen6/FoodImage.jpg";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    width: "100%",
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  button: {},
  Container: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
});
export class OrderListUser extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <div /*className={classes.Container}*/>
      <div style={{ overflowY: "auto", height: "calc(100vh - 130px)" }}>
        <Paper elevation={3} style={{ marginRight: "6%", marginTop: "3%" }}>
          <List style={{ fontSize: "100%" }} button>
            <ListItem style={{ marginLeft: "-3%", marginTop: "-3%" }}>
              <img
                src={FoodImage}
                style={{
                  position: "absolute",
                  padding: "2%",
                  alignContent: "left",
                  borderRadius: "5%",
                  width: "22%",
                  height: "78%",
                  marginLeft: "-2%",
                }}
              />
              <ListItemText
                style={{ marginLeft: "32%", marginTop: "3%" }}
                primary="ManjuShree Restaurent"
                secondary="Telibandha Raipur"
              />
            </ListItem>

            <Divider style={{ marginTop: "-1%" }} />
            <ListItem>
              <ListItemText
                style={{
                  marginLeft: "0",
                  marginTop: "-3%",
                }}
                primary={
                  <Typography
                    style={{
                      marginTop: "0",
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Items
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    1*veg manchurian
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{
                  marginLeft: "0",
                  marginTop: "-7%",
                }}
                primary={
                  <Typography
                    style={{
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Ordered On
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    7 Mar 2020 at 01:10 PM
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{ marginTop: "-7%", marginLeft: "0" }}
                primary={
                  <Typography
                    style={{
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Total Amount
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    ₹112
                  </Typography>
                }
              />
            </ListItem>
            <Divider style={{ marginTop: "-2%", marginBottom: "3%" }} />
            <ListItem>
              <ListItemSecondaryAction>
                <Button
                  style={{
                    color: "grey",
                    textJustify: "center",
                    marginTop: "-8%",
                    textTransform: "capitalize",
                  }}
                >
                  Repeat Order
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
        <Paper elevation={3} style={{ marginRight: "6%", marginTop: "3%" }}>
          <List style={{ fontSize: "100%" }} button>
            <ListItem style={{ marginLeft: "-3%", marginTop: "-3%" }}>
              <img
                src={FoodImage}
                style={{
                  position: "absolute",
                  padding: "2%",
                  alignContent: "left",
                  borderRadius: "5%",
                  width: "22%",
                  height: "78%",
                  marginLeft: "-2%",
                }}
              />
              <ListItemText
                style={{ marginLeft: "32%", marginTop: "3%" }}
                primary="ManjuShree Restaurent"
                secondary="Telibandha Raipur"
              />
            </ListItem>

            <Divider style={{ marginTop: "-1%" }} />
            <ListItem>
              <ListItemText
                style={{
                  marginLeft: "0",
                  marginTop: "-3%",
                }}
                primary={
                  <Typography
                    style={{
                      marginTop: "0",
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Items
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    1*veg manchurian
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{
                  marginLeft: "0",
                  marginTop: "-7%",
                }}
                primary={
                  <Typography
                    style={{
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Ordered On
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    7 Mar 2020 at 01:10 PM
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{ marginTop: "-7%", marginLeft: "0" }}
                primary={
                  <Typography
                    style={{
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Total Amount
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    ₹112
                  </Typography>
                }
              />
            </ListItem>
            <Divider style={{ marginTop: "-2%", marginBottom: "3%" }} />
            <ListItem>
              <ListItemSecondaryAction>
                <Button
                  style={{
                    color: "grey",
                    textJustify: "center",
                    marginTop: "-8%",
                    textTransform: "capitalize",
                  }}
                >
                  Repeat Order
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
        <Paper elevation={3} style={{ marginRight: "6%", marginTop: "3%" }}>
          <List style={{ fontSize: "100%" }} button>
            <ListItem style={{ marginLeft: "-3%", marginTop: "-3%" }}>
              <img
                src={FoodImage}
                style={{
                  position: "absolute",
                  padding: "2%",
                  alignContent: "left",
                  borderRadius: "5%",
                  width: "22%",
                  height: "78%",
                  marginLeft: "-2%",
                }}
              />
              <ListItemText
                style={{ marginLeft: "32%", marginTop: "3%" }}
                primary="ManjuShree Restaurent"
                secondary="Telibandha Raipur"
              />
            </ListItem>

            <Divider style={{ marginTop: "-1%" }} />
            <ListItem>
              <ListItemText
                style={{
                  marginLeft: "0",
                  marginTop: "-3%",
                }}
                primary={
                  <Typography
                    style={{
                      marginTop: "0",
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Items
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    1*veg manchurian
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{
                  marginLeft: "0",
                  marginTop: "-7%",
                }}
                primary={
                  <Typography
                    style={{
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Ordered On
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    7 Mar 2020 at 01:10 PM
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{ marginTop: "-7%", marginLeft: "0" }}
                primary={
                  <Typography
                    style={{
                      color: "grey",
                      fontVariantCaps: "all-small-caps",
                    }}
                  >
                    Total Amount
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "textprimary",
                    }}
                  >
                    ₹112
                  </Typography>
                }
              />
            </ListItem>
            <Divider style={{ marginTop: "-2%", marginBottom: "3%" }} />
            <ListItem>
              <ListItemSecondaryAction>
                <Button
                  style={{
                    color: "grey",
                    textJustify: "center",
                    marginTop: "-8%",
                    textTransform: "capitalize",
                  }}
                >
                  Repeat Order
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}
OrderListUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderListUser);
