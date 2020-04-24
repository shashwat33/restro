import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    marginTop: "6%",
    top: "10%",
    padding: "2%",
    marginLeft: "0",
    // borderRadius: theme.shape.borderRadius,
    border: "1px solid grey",
    borderRadius: "25px",

    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: "0",
    top: "2%",
    color: "grey",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    borderRadius: "20px",
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
        boxShadow: "grey",
        borderRadius: "50px",
        borderColor: "#f06292",
        border: "1px solid #f06292",
        color: "#f06292",
        padding: "14px",
      },
    },
  },
});

function Searchbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="red"> */}
      <Toolbar>
        {/* <div className={classes.grow} /> */}
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}

Searchbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Searchbar);
