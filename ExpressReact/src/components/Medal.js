import React, { Component } from 'react';

const typeMap = {
  G: 'Gold',
  S: 'Silver',
  B: 'Bronze'
};

class Medal extends Component {
  render() {
    const title = typeMap[this.props.type];
    return (
      <li className="medal">
        <span 
          className={`symbol symbol-${this.props.type}`} 
          title={title}>
          {this.props.type}
        </span>
        <span className="year">{this.props.year}</span>
        <span className="city">{this.props.city}</span>
        <span className="event">{this.props.event}</span>
        <span className="category">{this.props.category}</span>
      </li>
    );
  }
}

export default Medal;