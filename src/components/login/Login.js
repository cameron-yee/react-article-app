import React, { Component } from 'react';
import 'bulma/bulma.sass'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.setLogin = this.setLogin.bind();
  }

  setLogin = () => {
    this.props.onLogin(); 
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image header-img">
                <div className="image-placeholder"></div>
              </figure>
            </div>
            <div className="card-content">
              <div className="card-header-title is-centered">
                <button type="Submit" className="button is-primary" onClick={this.setLogin}>Login</button>
              </div>
              <div className="content">Login to view top articles from the NY Times.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
