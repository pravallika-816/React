import React, { Component } from 'react';
class StateEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-title">Counter: {this.state.count}</h1>
        <div className="button-group">
          <button className="button increment" onClick={this.increment}>Increment</button>
          <button className="button decrement" onClick={this.decrement}>Decrement</button>
          <button className="button reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default StateEx;
