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
            <Button
              style={{
                position: "absolute",
                height: "16px",
                minWidth: "0%",
                width: "200%",
                borderRadius: "1%",
                right: "2%",
                borderColor: "#f06292",
                color: "#f06292",
                textTransform: "capitalize",
                textAlign: "center",
                textJustify: "center",
              }}
              variant="outlined"
              onClick={this.IncrementDecrementButton}
            >
              <span style={{ marginTop: "-65%" }}> Add</span>
            </Button>
          </div>
        );
      case 2:
        // return <IncrementDecrement prevStep={this.prevStep} />;
        return (
          <div
            style={{
              position: "absolute",
              height: "16px",
              right: "15%",
              minWidth: "0%",
              width: "180%",
              display: "flex",
              //   borderRadius: "1%",
              borderColor: "#f06292",
              border: "1px solid #f06292",
              color: "#f06292",

              //   padding: "1px",
            }}
          >
            <Button
              size="small"
              color="primary"
              style={{
                borderRadius: "1%",
                minHeight: "5px",
                minWidth: "0px",

                height: "5%",
                borderColor: "#f06292",
                color: "#f06292",
                marginTop: "-16%",
              }}
              onClick={this.DecreaseItem}
            >
              -
            </Button>

            {this.state.show ? (
              <h6 style={{ marginTop: "-2%" }}>{this.state.quantity}</h6>
            ) : (
              ""
            )}

            <Button
              size="small"
              color="primary"
              style={{
                minHeight: "0px",
                minWidth: "0px",
                right: "0%",
                borderColor: "#f06292",
                color: "#f06292",
                marginTop: "-14%",
              }}
              onClick={this.IncrementItem}
            >
              +
            </Button>
          </div>
        );
    }
  }
}

export default AddRun;
