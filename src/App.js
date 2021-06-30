import './App.css';
import React from 'react';
import logo from './assets/logo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      title: 'hello form Bridgelabz'
    }
  }

  onClick=(event) =>{
    window.open(this.url,"_blank");
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>
        <img src={logo} onClick={this.onClick} alt="bridgelabz"/>
      </div>
        );
  }
}
        export default App;
