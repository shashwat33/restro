import React, { Component } from "react";
import TopArrow from "./TopArrow";
import MenuItemList from "./MenuItemList";
import ButtonAcceptReject from "./ButtonAcceptReject";

export class HomeSingleOrderReruest extends Component {
  render() {
    return (
      <div>
        <TopArrow />
        <ButtonAcceptReject />
        <MenuItemList />
      </div>
    );
  }
}

export default HomeSingleOrderReruest;
