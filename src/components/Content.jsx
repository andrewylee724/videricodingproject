import React, {Component} from 'react';
import axios from 'axios';

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

  getFileName(str) {
    let fileNames = str.split('/');
    return fileNames[fileNames.length - 1];
  }

  getCreatedAt(str) {
    let splits = str.split('/');
    return splits[5] + '/' + splits[6] + '/' + splits[4];
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
        <li key={file.id}>
          <div>
            <img src={file.previewURL} alt={this.getFileName(file.previewURL)}/>
            {/*filename.mp4, resolution 4Khigh, seconds, length x width, created*/}
              <span>{this.getFileName(file.previewURL)}</span>
              <span>{file.webformatWidth + ' x ' + file.webformatHeight + '\n'}</span>
              <span>Created At: {this.getCreatedAt(file.previewURL)}</span>
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
          <ul>
            {this.renderFiles()}
          </ul>
      </div>
    )
  }

}

export default Content;