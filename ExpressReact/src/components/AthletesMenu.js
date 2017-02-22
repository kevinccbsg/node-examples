import React, { Component } from 'react';
import { Link } from 'react-router';

class AthletesMenu extends Component {
  render () {
    return (
      <nav className="athletes-menu">
        {this.props.athletes.map(athlete => {
          return <Link 
                  key={athlete.id} 
                  to={`/athlete/${athlete.id}`}
                  activeClassName="active">
                  {athlete.name}
                  </Link>; 
        })}
      </nav>
    );
  }
}

export default AthletesMenu;