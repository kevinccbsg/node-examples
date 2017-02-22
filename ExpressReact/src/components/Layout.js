import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/images/logo-judo-heroes.png" />
          </Link>
        </header>
        <div className="app-content">
          {this.props.children}
        </div>
        <footer>
          This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
        </footer>
      </div>
    );
  }
}

export default Layout;