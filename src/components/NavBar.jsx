import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  
  render() {
    return (
      <div className="nav-bar" >
        <ul>
          <li>Videri</li>
          <li>Content</li>
        </ul>
      </div>
    )
  }

}

export default NavBar;