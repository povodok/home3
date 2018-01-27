import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  handleClick = event => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };

  render() {
    const { isSelected, isClickable, number } = this.props;
    let classes = "step";

    if (isSelected) {
      classes = classes + " step-selected";
    }

    if (isClickable) {
      classes = classes + " step-clickable";
    }

    return (
      <div className={classes}>
        <p className="step__number" onClick={this.handleClick}>
          {number}
        </p>
        <p className="step__title" onClick={this.handleClick}>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Step;
