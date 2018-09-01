import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Folders from './Folders.jsx';
import Content from './Content.jsx';

class Main extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  
  render() {
    return (
      <div className="main" >
        <NavBar />
        <Folders />
        <Content />

      </div>
    )
  }

}

export default Main;