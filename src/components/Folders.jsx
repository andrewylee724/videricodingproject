import React, {Component} from 'react';

class Folders extends Component {
  constructor(props) {
    super(props)

    this.state = {
      folders: this.props.folders,
    }
  }
  
  renderFolders() {
    return this.state.folders.map(folder => {
      return (
        <li 
          key={folder}
          onClick={() => {this.props.handleFolderClick(folder)}}>
            {folder}
        </li>
      )
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