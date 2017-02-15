import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Texto from './Texto';
import MyForm from './MyForm';


const dataArr = [
  {name:'kj', surname:'me', key:1},
  {name:'ea', surname:'mj', key:2}
];

function tick() {
  return <Texto name="kj" surname="me" />;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {tick()}
        {dataArr.map((obj) =>
          <div key={obj.key}>
            <Texto me={obj.name} surname={obj.surname} />
            <p>jeje</p>
          </div>
        )}
        <MyForm />
      </div>
    );
  }
}

export default App;
