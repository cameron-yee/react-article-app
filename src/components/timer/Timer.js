import React, { Component } from 'react';
import 'bulma/bulma.sass'
import './Timer.css'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => 
      this.tick(), 1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="timer">
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Timer;
