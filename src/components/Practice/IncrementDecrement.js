import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export class IncrementDecrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
    };
  }
  IncrementItem = () => {
    if (this.state.quantity > 20) {
    } else {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    }
  };
  DecreaseItem = (e) => {
    if (this.state.quantity < 1) {
      e.preventDefault();
      this.props.prevStep();
    } else {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
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
            style={{ marginTop: "-2%", marginLeft: "13%", marginRight: "3%" }}
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

export default IncrementDecrement;
