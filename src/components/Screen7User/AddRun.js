import React, { Component } from "react";
import { AddButton } from "./AddButton";
import IncrementDecrement from "./IncrementDecrement";

export class AddRun extends Component {
  state = {
    step: 1,
  };
  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <AddButton nextStep={this.nextStep} />;
      case 2:
        return <IncrementDecrement prevStep={this.prevStep} />;
    }
  }
}

export default AddRun;
