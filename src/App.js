import './App.css';
import React from 'react';
import logo from './assets/logo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
     user:''
    }
  }

  onClick=(event) =>{
    window.open(this.url,"_blank");
  }

  onNameChange = (event)=>{
    this.setState({user:event.target.value})
  }

  render() {
    return (
      <>
      <div>
        <h1>
        Hello {this.state.user} from bridgelabz
        </h1>
        <img src={logo} onClick={this.onClick} alt="bridgelabz"/>
      </div>

      <div>
        <input onChange={this.onNameChange}/>
      </div>
      </>
        );
        
  }
}
        export default App;
