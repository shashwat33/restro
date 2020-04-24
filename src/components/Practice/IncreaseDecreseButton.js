import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class IncreaseDecreseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0,
    };
  }

  add = () => {
    if (this.state.quantity > 20) {
    } else {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    }
  };

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "20px",
          marginLeft: "50%",
          display: "flex",
          //   borderRadius: "1%",
          borderColor: "#f06292",
          border: "1px solid #f06292",
          color: "#f06292",
          marginRight: "-30%",
          //   padding: "1px",
        }}
      >
        <Button
          size="small"
          color="primary"
          style={{
            minHeight: "0px",
            minWidth: "0px",
            padding: 0,
            marginLeft: "15%",
            marginRight: "15%",
            color: "#f06292",
          }}
          onClick={this.add}
        >
          +
        </Button>

        {this.state.show ? (
          <h6 style={{ marginTop: 4, marginRight: "2%", marginLeft: "2%" }}>
            {this.state.quantity}
          </h6>
        ) : (
          ""
        )}

        <Button
          size="medium"
          color="primary"
          style={{
            borderRadius: "1%",
            minHeight: "0px",
            minWidth: "0px",
            color: "#f06292",
          }}
          onClick={this.DecreaseItem}
        >
          -
        </Button>
      </div>
    );
  }
}

export default IncreaseDecreseButton;
