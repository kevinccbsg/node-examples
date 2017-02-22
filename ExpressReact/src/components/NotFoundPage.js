import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFoundPage extends Component {
  render() {
    console.log('data')
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back</Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;