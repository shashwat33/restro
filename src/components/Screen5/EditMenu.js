import React, { Component } from "react";
import "./DesignEdit.css";
import SelectTextBox from "./SelectTextBox";
import { TopEditMenu } from "./TopEditMenu";
import { BottomButton } from "./BottomButton";

export class EditMenu extends Component {
  render() {
    return (
      <div className="top">
        <div>
          <TopEditMenu />
        </div>
        <div>
          <SelectTextBox />
        </div>

        <BottomButton />
      </div>
    );
  }
}

export default EditMenu;
