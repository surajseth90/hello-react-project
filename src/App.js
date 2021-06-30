import './App.css';
import React from 'react';
import logo from './assets/logo.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'hello form Bridgelabz'
    }
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>
        <img src={logo} alt="bridgelabz"/>
      </div>
        );
  }
}
        export default App;
