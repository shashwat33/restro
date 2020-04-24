import React, { Component } from "react";
import { Top } from "./Top";
import "./Addmenu.css";
import TextBox from "./TextBox";
import Bottom from "./Bottom";

export class Addmenu extends Component {
  render() {
    return (
      <div className="top">
        <div>
          <Top />
        </div>
        <div>
          <TextBox />
        </div>

        <Bottom />
      </div>
    );
  }
}

export default Addmenu;
