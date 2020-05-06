import React, { Component } from "react";
import "./DesignEdit.css";
import { TopEditMenu } from "./TopEditMenu";
import { BottomButton } from "./BottomButton";
import SelectText from "./SelectText";
import ImageUpload from "./ImageUpload";

export class EditMenu extends Component {
  render() {
    return (
      <div style={{ marginLeft: "2%", marginRight: "2%" }}>
        <TopEditMenu />
        {/* <ImageUpload /> */}
        <SelectText />

        {/* <BottomButton /> */}
      </div>
    );
  }
}

export default EditMenu;
