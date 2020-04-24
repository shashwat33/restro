import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ReactDOM from "react-dom";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing.unit * 1,
      color: "#f06292",
    },
  },
  input: {
    borderRadius: "50px",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #f06292",
    width: "100%",
    fontFamily: "Times New Roman",
    color: "#f06292",

    //  fontVariant: "small-caps",
    fontSize: "100%",
    fontWeight: "bold",
    alignContent: "center",
    padding: "10px 26px 10px 12px",
    left: "0",
    padding: "14px",
    right: "0",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: "50px",
      borderColor: "#f06292",
      border: "1px solid #f06292",
      color: "#f06292",
      padding: "14px",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f06292",
    },
  },
});
const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    color: theme.palette.text.primary,
  },
  formControl: {
    color: theme.palette.text.primary,
    margin: theme.spacing.unit,
    fullWidth: "true",
    marginTop: 17,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },

  textField: {
    color: theme.palette.text.primary,
    marginLeft: 5,
    marginRight: 5,
    marginTop: "4%",
    width: "48%",
  },
  textField1: {
    color: theme.palette.text.primary,
    marginLeft: 5,
    marginRight: 5,
    marginTop: "3%",
  },
  icon: {
    width: 400,
    height: 45,
    color: "grey",
    margin: "0%",
    position: "absolute",
  },
  add: {
    width: 50,
    height: 55,
    margin: "0%",
    padding: "0%",
    position: "absolute",
    color: "#f48fb1",
  },
  margin1: {
    borderRadius: "50%",
    height: 30,
    margin: theme.spacing.unit,
    marginRight: "0%",
    marginTop: "3%",
    padding: "26px",
  },
  margin: {
    margin: theme.spacing.unit,
    width: "8%",
    borderRadius: "22%",
    marginLeft: 20,
    marginRight: 20,
    padding: "25px",
    marginTop: "4%",
  },
});

function handleClick() {
  alert("You clicked the Chip."); // eslint-disable-line no-alert
}
export class SelectTextBox extends Component {
  state = {
    Catogary: "",
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <form autoComplete="off">
          <FormControl
            variant="outlined"
            className={classes.formControl}
            fullWidth={true}
          >
            <InputLabel
              ref={(ref) => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Select Category
            </InputLabel>

            <Select
              value={this.state.Catogary}
              onChange={this.handleChange}
              input={
                <BootstrapInput
                  labelWidth={this.state.labelWidth}
                  name="Catogary"
                  margin="dense"
                />
              }
            >
              <option value="" />
              <em>None</em>
              <option value={10}>Chinese</option>
              <option value={20}>South Indian</option>
              <option value={30}>Sweets</option>
            </Select>
          </FormControl>
          <TextField
            fullWidth={true}
            className={classes.textField1}
            placeholder="Name"
            margin="dense"
            variant="outlined"
            InputProps={{
              inputProps: {
                style: {
                  borderRadius: "25px",
                  padding: "14px",
                  color: "#E91E63",
                  borderColor: "primary",
                  border: "1px solid #f06292",
                },
              },
              style: { borderRadius: "20px", borderColor: "primary" },
            }}
          />
          <span>
            <TextField
              color="primary"
              placeholder="price"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              InputProps={{
                inputProps: {
                  style: {
                    borderRadius: "25px",
                    padding: "14px",
                    color: "#E91E63",
                    borderColor: "primary",
                    border: "1px solid #f06292",
                  },
                },
                style: { borderRadius: "20px", borderColor: "primary" },
              }}
            />
            <Button
              variant="outlined"
              color="primary"
              className={classes.margin}
            >
              {" "}
              <ImageOutlinedIcon className={classes.icon} />
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              className={classes.margin1}
            >
              <AddIcon className={classes.add} />
            </Button>
          </span>
        </form>
      </MuiThemeProvider>
    );
  }
}
SelectTextBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectTextBox);
