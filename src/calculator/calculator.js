import React from "react";
import Buttons from './buttons/buttons';

import './calculator.css';

export class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calculatorValue: '',
      previousCalculatorValue: '',
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    console.log('state has changed', this.state);
  }

  enterNumber = (value) => {
    if (this.state.action && this.state.clearDisplayValue) {
      this.setState({calculatorValue: value, clearDisplayValue: false});
    } else {
      const newValue = `${this.state.calculatorValue}${value}`;
      this.setState({calculatorValue: newValue});
    }
  };

  onAction = (action) => {
    this.setState(prevState => ({
      ...this.state,
      clearDisplayValue: true,
      action: action,
      previousCalculatorValue: prevState.calculatorValue
    }));
  };

  clear = () => {
    this.setState({calculatorValue: ''});
  };

  equals = () => {
    console.log('this.state.action', this.state.action);
    let result;
    switch (this.state.action) {
      case 'add':
        result = Number(this.state.previousCalculatorValue) + Number(this.state.calculatorValue);
        break;

      case 'substract':
        result = Number(this.state.previousCalculatorValue) - Number(this.state.calculatorValue);
        break;

      case 'multiply':
        result = Number(this.state.previousCalculatorValue) * Number(this.state.calculatorValue);
        break;

      case 'divide':
        result = Number(this.state.previousCalculatorValue) / Number(this.state.calculatorValue);
        break;
    }

    this.setState({calculatorValue: result, clearDisplayValue: true})
  };


  buttons = [
    {type: 'number', displayValue: '1', action: () => this.enterNumber(1)},
    {type: 'number', displayValue: '2', action: () => this.enterNumber(2)},
    {type: 'number', displayValue: '3', action: () => this.enterNumber(3)},
    {type: 'add', displayValue: '+', action: () => this.onAction('add')},
    {type: 'number', displayValue: '4', action: () => this.enterNumber(4)},
    {type: 'number', displayValue: '5', action: () => this.enterNumber(5)},
    {type: 'number', displayValue: '6', action: () => this.enterNumber(6)},
    {type: 'subsctract', displayValue: '-', action: () => this.onAction('substract')},
    {type: 'number', displayValue: '7', action: () => this.enterNumber(7)},
    {type: 'number', displayValue: '8', action: () => this.enterNumber(8)},
    {type: 'number', displayValue: '9', action: () => this.enterNumber(9)},
    {type: 'multiply', displayValue: '*', action: () => this.onAction('multiply')},
    {type: 'equals', displayValue: '=', action: () => this.equals()},
    {type: 'clear', displayValue: 'C', action: () => this.clear()},
    {type: 'divide', displayValue: '%', action: () => this.onAction('divide')},
  ];

  render() {
    return (
      <div className="calculator-wrapper">

        <div className="input-screen">
          {this.state.calculatorValue}
        </div>

        <div className="buttons-wrapper">

          <Buttons buttons={this.buttons}/>

        </div>

      </div>
    )
  }


}
