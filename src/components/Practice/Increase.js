import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Increase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          height: "20px",

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
            minHeight: "0px",
            minWidth: "0px",
            borderColor: "#f06292",
            color: "#f06292",
          }}
          onClick={this.DecreaseItem}
        >
          -
        </Button>

        {this.state.show ? (
          <h6 style={{ marginTop: 4 }}>{this.state.clicks}</h6>
        ) : (
          ""
        )}

        <Button
          size="small"
          color="primary"
          style={{
            minHeight: "0px",
            minWidth: "0px",
            borderColor: "#f06292",
            color: "#f06292",
            textAlign: "center",
          }}
          onClick={this.IncrementItem}
        >
          +
        </Button>
      </div>
    );
  }
}

export default Increase;
