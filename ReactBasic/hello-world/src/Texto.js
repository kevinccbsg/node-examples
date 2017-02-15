import React, { Component } from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function getwat() {
  return <h1>Hello, waaat.</h1>;
}

function printProps (props) {
  var data = '';
  console.log(props);
  for(var i in props) {
    if (props[i]) {
      data = data + props[i] + '-';
    }
  }
  return data;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

class Texto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: true,
      user: user
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('se monta');
  }

  componentWillUnmount() {
    console.log('se desmonta');
  }

  handleClick(e) {
    console.log('click')
    this.setState({message:!this.state.message});
  }

  render () {
    const change = this.state.message;
    let header = null;
    if (change) {
      header = getGreeting();
    }
    else {
      header = getwat()
    }
    return (
      <div>
        {header}
        <p>waat {formatName(this.state.user)}</p>
        <span>{new Date().toLocaleTimeString()}</span>
        <p>Las propiedades que me pasas son {printProps(this.props)}</p>
        <button onClick={this.handleClick}>shoot</button>
      </div>
    );
  }
}

export default Texto;