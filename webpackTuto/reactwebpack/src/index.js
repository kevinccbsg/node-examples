import React from 'react';
import {render} from 'react-dom';

/*function App (props) {
  return <h1> Hello react {props.name}</h1>;
}*/

/*const App = (props) => {
  return <h1> Hello react {props.name} </h1>;
};*/

const list = ['Instagram', 'whatsapp'];
const list2 = ['oculus'];

const listTotal = [...list, ...list2];

class App extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
	  {listTotal.map((item, index) =>
	    <li key={index}>{item}</li>
  	  )}
        </ul>
      </div>
    );
  }
}

render(<App name="test" />, document.getElementById('app'));
