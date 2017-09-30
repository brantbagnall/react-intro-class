import React, {Component} from 'react';
import calculatorImg from './calculator.png'

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      header: "My Calculator",
      displayNum:'0',
      tempNum: '',
      numArr:[],
      clicked: false
    }
  }

  updateHeader(e) {
    this.setState({
      header: e.target.value
    })
  }

updateDisplay(number) {
  var displayNumber;
  if (this.state.clicked === false) {
    this.state.clicked = true;
    displayNumber = number;
  }else {
    displayNumber = this.state.displayNum + number;
  }
  this.setState({
    displayNum: displayNumber
  });
}

updateClear(){
  this.setState({
    displayNum: '0',
    numArr: [],
    clicked: false
  });
}

pushArr(arg){
  this.state.numArr.push(this.state.displayNum)
  this.state.numArr.push(arg)
  this.setState({
    displayNum: arg,
    clicked:false
  })
}

updateExec(){
  this.state.numArr.push(this.state.displayNum);
  var exe = this.state.numArr.join('');
  console.log(eval(exe));
  this.setState({
    displayNum: eval(exe),
    clicked:false,
    numArr: [],
  });
}

  render() {
    return (
  <div id="calculator-container">
    <input id="header-input"
onChange={ (e)=> this.updateHeader(e)}
    />
    <h1 id="header" >{this.state.header} </h1>
    <img className="remove-highlight" src={calculatorImg} alt="calculator" />
    <div id="calculator-mask" className="remove-highlight">
      <div className="output">
        <span className="total" >{this.state.displayNum}</span>
      </div>

      <div className="btn clear" onClick={ (e)=> this.updateClear()}></div>

      <div className="btn zero" onClick={ (e)=> this.updateDisplay('0')}></div>
      <div className="btn one" onClick={ (e)=> this.updateDisplay('1')}></div>
      <div className="btn two" onClick={ (e)=> this.updateDisplay('2')}></div>
      <div className="btn three" onClick={ (e)=> this.updateDisplay('3')}></div>
      <div className="btn four" onClick={ (e)=> this.updateDisplay('4')}></div>
      <div className="btn five" onClick={ (e)=> this.updateDisplay('5')}></div>
      <div className="btn six" onClick={ (e)=> this.updateDisplay('6')}></div>
      <div className="btn seven" onClick={ (e)=> this.updateDisplay('7')}></div>
      <div className="btn eight" onClick={ (e)=> this.updateDisplay('8')}></div>
      <div className="btn nine" onClick={ (e)=> this.updateDisplay('9')}></div>

      <div className="btn equal" onClick={ (e)=> this.updateExec()}></div>
      <div className="btn multiply" onClick={ (e)=> this.pushArr('*')}></div>
      <div className="btn divide" onClick={ (e)=> this.pushArr('/')}></div>
      <div className="btn subtract" onClick={ (e)=> this.pushArr('-')}></div>
      <div className="btn add" onClick={ (e)=> this.pushArr('+')}></div>
    </div>
  </div>
)
  }
}
export default Calculator;
