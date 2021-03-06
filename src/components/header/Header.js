import React, { Component } from 'react';
import logo from '../../logo.svg';
import 'bulma/bulma.sass'
import './Header.css'
import Logout from '../logout/Logout'

class Header extends Component {
  constructor(props) {
    super(props);
    this.setLogout = this.setLogout.bind(this);
  }

  setLogout() {
    this.props.onLogout();
  }

  render() {
    return (
      // <div  className="header columns header-img">
      //   <div className="column is-one-quarter">
      //     <img src={logo} className="app-logo" alt="logo" />
      //   </div>
      //   <div className="title-div column is-half">
      //     <h1 className="title">Top NY Times Articles</h1>
      //   </div>
      //   <div className="column is-one-quarter nav-right">
      //     <Logout onLogout={this.setLogout}/>
      //   </div>
      // </div>
      <div>
        <nav class="navbar">
          <div class="navbar-brand pad">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <div class="navbar-end pad">
            <Logout onLogout={this.setLogout}/>
          </div>
        </nav>
        <hr/>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1>Top News from the NY Times</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
