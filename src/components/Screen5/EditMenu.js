import React, { Component } from "react";
import "./DesignEdit.css";
import { TopEditMenu } from "./TopEditMenu";
import SelectText from "./SelectText";

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
