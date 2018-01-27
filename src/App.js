import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleTabClick = step => {
    this.setState({ step });
  };

  handleChangeForm = (name, value) => {
    const newVal = {
      [name]: value
    };

    this.setState({ ...this.state, ...newVal });
  };

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };

  handleChangeTimeOver = isTimeOver => {
    this.setState({ isTimeOver });
  };

  isFormCommitable = () => {
    const { firstName, lastName, email, cardNumber } = this.state;
    switch (this.state.step) {
      case 1: {
        return (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        );
      }

      case 2: {
        return cardNumber.length === 16;
      }

      default: {
        return false;
      }
    }
  };

  renderForm = () => {
    const { firstName, lastName, email, cardNumber } = this.state;
    switch (this.state.step) {
      case 1: {
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      }

      case 2: {
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      }

      default: {
        return "Поздравляем!";
      }
    }
  };

  render() {
    const { step } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((title, i) => (
            <Step
              onClick={this.handleTabClick}
              isSelected={step === i + 1}
              key={title}
              number={i + 1}
              isClickable={i + 1 < step}
            >
              {title}
            </Step>
          ))}
        </div>

        <div className="form-content">{this.renderForm()}</div>

        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable() || this.state.isTimeOver}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
