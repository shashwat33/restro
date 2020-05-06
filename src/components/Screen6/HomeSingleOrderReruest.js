import React, { Component } from "react";
import TopArrow from "./TopArrow";
import MenuItemList from "./MenuItemList";
import ButtonAcceptReject from "./ButtonAcceptReject";
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("scroll").style.fontSize = "5px";
//   } else {
//     document.getElementById("scroll").style.fontSize = "20px";
//   }
// }
export class HomeSingleOrderReruest extends Component {
  render() {
    return (
      <div>
        {/* <div id="scroll"> */}
        <TopArrow />
        {/* </div> */}
        <ButtonAcceptReject />
        <div>
          <MenuItemList />
        </div>
      </div>
    );
  }
}

export default HomeSingleOrderReruest;
