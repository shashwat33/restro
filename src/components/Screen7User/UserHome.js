import React, { Component } from "react";
import ItemDetail from "./ItemDetail";
import { TopHome } from "./TopHome";
import "./DesignUser.css";
import { BottomPay } from "./BottomPay";
export class UserHome extends Component {
  render() {
    return (
      <div className="user" style={{ fontFamily: "Big Caslon FB" }}>
        <TopHome />
        <ItemDetail />
        {/* <BottomPay /> */}
      </div>
    );
  }
}

export default UserHome;
