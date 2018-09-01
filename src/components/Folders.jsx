import React, {Component} from 'react';

class Folders extends Component {
  constructor() {
    super()

    this.state = {
      folders: ['Clouds', 'Cars', 'Birds'],
    }
  }
  
  renderFolders() {
    return this.state.folders.map(folder => {
      return <li key={folder}>{folder}</li>
    })
  }

  render() {
    return (
      <div className="folders">
        <ul>
          {this.renderFolders()}
        </ul>
      </div>
    )
  }

}

export default Folders;