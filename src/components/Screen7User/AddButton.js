import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});
export class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0,
    };
  }
  add = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { values, classes } = this.props;
    return (
      <div>
        <Button variant="outlined" onClick={this.add}>
          Default
        </Button>
      </div>
    );
  }
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
