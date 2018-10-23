import React, { Component } from 'react';
import 'bulma/bulma.sass'
import './Logout.css'

class Logout extends Component {
  constructor(props) {
    super(props);
    this.setLogout = this.setLogout.bind(this);
  }

  setLogout = () => {
    this.props.onLogout();
  }

  render() {
    return (
      <div>
        <button type="Submit" className="button is-danger" onClick={this.setLogout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
