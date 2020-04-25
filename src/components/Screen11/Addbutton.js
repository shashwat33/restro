import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Increase from "./Increase";

export class Addbutton extends Component {
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
          onClick={this.add}
        >
          <span style={{ marginTop: "-65%" }}> Add</span>
        </Button>
      </div>
    );
  }
}

export default Addbutton;
