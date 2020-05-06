import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";

// const styles = (theme) => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
// });
export class AddRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0,
      step: 1,
    };
  }
  //proceed to next Increase Decrease Button
  IncrementDecrementButton = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  IncrementItem = () => {
    if (this.state.quantity > 20) {
    } else {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    }
  };

  DecreaseItem = (e) => {
    if (this.state.quantity <= 1) {
      e.preventDefault();
      this.PrevAddButton();
    } else {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  //go back to previous Add button
  PrevAddButton = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { step, values } = this.state;

    switch (step) {
      case 1:
        // return <AddButton nextStep={this.nextStep} />;
        return (
          <div>
            <Button variant="outlined" onClick={this.IncrementDecrementButton}>
              Add
            </Button>
          </div>
        );
      case 2:
        // return <IncrementDecrement prevStep={this.prevStep} />;
        return (
          <div
            style={{
              display: "flex",
              borderColor: "#f06292",
              border: "1px solid #f06292",
              color: "#f06292",
              padding: "1px",
              minHeight: "0%",
              marginTop: "20px",
              height: "14px",
              width: "80%",
              marginRight: "100%",
            }}
          >
            <Button
              size="small"
              color="primary"
              style={{
                minHeight: "0px",
                minWidth: "0px",
                color: "#f06292",
                marginTop: "-11%",
              }}
              onClick={this.DecreaseItem}
            >
              <RemoveIcon fontSize="small" />
            </Button>

            {this.state.show ? (
              <h5
                style={{
                  marginTop: "-2%",
                  marginLeft: "13%",
                  marginRight: "3%",
                }}
              >
                {this.state.quantity}
              </h5>
            ) : (
              ""
            )}

            <Button
              size="medium"
              color="primary"
              style={{
                minHeight: "0px",
                minWidth: "0px",
                color: "#f06292",
                marginTop: "-16%",
              }}
              onClick={this.IncrementItem}
            >
              <AddIcon fontSize="small" />
            </Button>
          </div>
        );
    }
  }
}

export default AddRun;
