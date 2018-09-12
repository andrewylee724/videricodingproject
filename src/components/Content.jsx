import React, {Component} from 'react';
import axios from 'axios';
import Helpers from '../helpers.js';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFolder: this.props.selectedFolder,
      currFiles: this.props.currFiles,
    }
  }

  componentDidMount() {
    console.log('select folder is', this.props.selectedFolder);

    this.props.getFiles(this.state.selectedFolder);
  }

  renderFiles() {

    let output = this.props.currFiles;

    console.log('output is', output);

    if(output.length === 0) {
      return (
        <span>There are currently no folders selected</span>
      );
    }

    output = output.map(file => {
      return (
        <li className="card" key={file.id}>
          <div onClick={() => {this.props.openModal(file.webformatURL)}}>
            <img src={file.previewURL} alt={Helpers.getFileName(file.previewURL)}/>
            {/*filename.mp4, resolution 4Khigh, seconds, length x width, created*/}
              <span>Name: {Helpers.getFileName(file.previewURL)}</span>
              <span>{file.webformatWidth + ' x ' + file.webformatHeight + '\n'}</span>
              <span>Created At: {Helpers.getCreatedAt(file.previewURL)}</span>
          </div>
        </li>
      );
    });

    return output;
  }
  
  render() {
    console.log('Content is rendering');

    return (
      <div className="content" >
        <h2>Content</h2>
          <ul className='cards'>
            {this.renderFiles()}
          </ul>
      </div>
    )
  }

}

export default Content;