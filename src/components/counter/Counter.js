import React, { Component } from 'react';
import 'bulma/bulma.sass'
import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => 
  //     this.tick(), 1000
  //   );
  // }
  
  // componentWillUnmount() {
  //   this.state;
  // }

  increment() {
    this.setState((state) => {
      return {count: state.count + 1}
    });
  }

  render() {
    return (
      <div className="counter">
        <div>{this.state.count}</div>
        {/* eslint-disable-next-line */}
        <a href="#" className="button" onClick={this.increment}>Increase</a>
      </div>
    );
  }
}

export default Counter;
