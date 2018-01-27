import React, { Component } from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>
        <input
          name="firstName"
          value={this.props.firstName}
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          value={this.props.lastName}
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          value={this.props.email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
