import './App.css';
import React from 'react';
import logo from './assets/logo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
     user:'',
     nameError:''
    }
  }

  onClick=(event) =>{
    window.open(this.url,"_blank");
  }

  onNameChange = (event)=>{
    const nameRegExp = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    this.setState({user:event.target.value})
    if(nameRegExp.test(event.target.value)){
      this.setState({nameError:''})
    }else{
      this.setState({nameError:'Name is in Incorrect Format'})
    }
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
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </>
        );
        
  }
}
        export default App;
