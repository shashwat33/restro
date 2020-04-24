import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Increase from "./Increase";

export class Addbutton extends Component {
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
        >
          <span style={{ marginTop: "-65%" }}> Add</span>
        </Button>
      </div>
    );
  }
}

export default Addbutton;
