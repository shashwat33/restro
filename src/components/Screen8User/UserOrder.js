import React, { Component } from "react";
import { TopUserOrder } from "./TopUserOrder";
import "./DesignUserOrder.css";
import { OrderListUser } from "./OrderListUser";

export class UserOrder extends Component {
  render() {
    return (
      <div className="UserOrder">
        <TopUserOrder />

        <OrderListUser />
      </div>
    );
  }
}

export default UserOrder;
