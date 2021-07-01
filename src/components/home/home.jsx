import React from 'react';
import logo from '../../assets/logo.png';
import './home.css';

class Home extends React.Component {
    url = 'https://www.bridgelabz.com/'
    constructor() {
        super()
        this.state = {
            user: '',
            nameError: ''
        }
    }

    onClick = (event) => {
        window.open(this.url, "_blank");
    }

    onNameChange = (event) => {
        const nameRegExp = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegExp.test(event.target.value)) {
            this.setState({ nameError: '' })
            this.setState({ user: event.target.value })
        } else {
            this.setState({ nameError: 'Name is in Incorrect Format' })
        }
    }

    render() {
        return (
            <div className="main">
                <div>
                    <h1>
                        Hello {this.state.user} from bridgelabz
                    </h1>
                    <img src={logo} onClick={this.onClick} alt="bridgelabz" />
                </div>

                <div>
                    <input onChange={this.onNameChange} />
                    <br/>
                    <span className="error-output">{this.state.nameError}</span>
                </div>

                <div>
                    A Bridgelabz we're a community of
                    <ul>
                        <li>
                            technologist
                        </li>
                        <li>thinkers</li>
                        <li>builders</li>
                    </ul>
                    Working together to keep the Tech Employebility of Engineers alive......
                    <br />
                    <br />
                    To know about us, visit <a href="https://www.bridgelabz.com/" ref="BridgeLabz" target="_blank">BridgeLabz</a> to learn even more about our mission i.e. <b>Employability to all.</b>
                </div>
            </div>

        );

    }
}

export default Home;