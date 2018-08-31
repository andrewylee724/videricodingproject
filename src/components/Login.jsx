import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      id: '',
      password: '',
      error: ''
    }

    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    const obj = {}
    obj[key] = value
    this.setState(obj)

    console.log('key/value is', key, value);
  }

  handleSignInClick() {
    //first, check if password passes all requirements (upper/lowercase, special characters)
    //then, invoke validateLogin if true

    const {password} = this.state;

    if(this.hasUpperCase(password) && this.hasLowerCase(password) && this.hasSpecialCharacters(password)) {
      this.props.validateLogin()
    } else {
      this.setState({
        error: 'Please Fit the Password Requirements'
      })
    }

  }


  hasUpperCase(str) {
    let test = str.toLowerCase()
    return str === test ? false : true;
  }

  hasLowerCase(str) {
    let test = str.toUpperCase()
    return str === test ? false : true;
  }

  hasSpecialCharacters(str) {
    let specialChars = "*|,\":<>[]{}`\';()@&$#%";
    let hasSpecialChar = false;

    for (let i = 0; i < str.length; i++) {
      if (specialChars.indexOf(str.charAt(i)) != -1) {
        hasSpecialChar = true;
        break;
      }
    }

    return hasSpecialChar;
  }

  render() {
    return (
      <div className="login-box">
        <input type="text" placeholder='ID' onChange={this.handleInputChange} name="id" className="id-input"></input>
        <input type="password" onChange={this.handleInputChange} placeholder='password' name="password" className="password-input"></input>
        <button onClick={this.handleSignInClick}>Sign In</button>
        <span style={{color: 'red'}} >{this.state.error}</span>
      </div>
    );
  }


}

export default Login;