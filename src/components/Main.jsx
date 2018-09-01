import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Folders from './Folders.jsx';
import Content from './Content.jsx';

class Main extends Component {
  constructor() {
    super()

    this.state = {
      folders: ['Clouds', 'Cars', 'Birds'],
      selectedFolder: 'Clouds',
    }
  }

  render() {
    return (
      <div className="main" >
        <NavBar />
        <Folders folders={this.state.folders} />
        <Content selectedFolder={this.state.selectedFolder}/>

      </div>
    )
  }

}

export default Main;