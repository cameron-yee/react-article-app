import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import Header from '../header/Header'
// import Timer from '../timer/Timer'
// import Counter from '../counter/Counter'
import Login from '../login/Login'
import Books from '../books/Books'
// import Logout from '../logout/Logout'


class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    console.log(this.key);
    this.setState({isLoggedIn: true}); 
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false}); 
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let dom;
    if(isLoggedIn) {
      dom = 
        <div className="App">
          <Header onLogout={this.handleLogoutClick}/>
          {/* <Timer />
          <Counter /> */}
          <Books />
        </div>;
    } else {
      dom = <Login onLogin={this.handleLoginClick}/>
    }
    return (
      <div className="App">
        {dom}
      </div>
      // <div className="App">
      //   <Header />
      //   <Timer />
      //   <Counter />
      // </div>
    );
  }
}

export default App;
