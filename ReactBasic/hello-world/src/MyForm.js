import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({value: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log('envio')
    alert('A name was submitted: ' + this.state.value);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <span>{this.state.value}</span>
      </form>
    );
  }
}

export default MyForm;