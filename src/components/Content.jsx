import React, {Component} from 'react';
import axios from 'axios';

class Content extends Component {
  constructor() {
    super()

    this.state = {
      currFolder: 'Clouds',
      currFiles: [],
    }
  }

  componentDidMount() {

    const url = 'https://pixabay.com/api';
    let params = {
      key: '9974841-d5eaa6de283f7e2309339b945',
      q: this.state.currFolder,
      lang: 'en',
      image_type: 'all',
      order: 'popular',
    }

    axios.get(url, {
      params: params,
    })
    .then( results => {
      let fetchedFiles = [];
      console.log('success!', results.data.hits);

      this.setState({
        currFiles: results.data.hits.splice(0, 49),
      })
    })
    .catch( error => {
      console.error('error in pixabay get request');
    });

  }

  renderFiles() {
    let output = [];

    const getFileName = function(str) {
      let fileNames = str.split('/');
      return fileNames[fileNames.length - 1];
    ;}

    const getCreatedAt = function(str) {
      let splits = str.split('/');

      return splits[5] + '/' + splits[6] + '/' + splits[4];
    }

    output = this.state.currFiles.map(file => {
      return (
        <li key={file.id}>
          <div>
            <img src={file.previewURL}/>
            {/*filename.mp4, resolution 4Khigh, seconds, length x width, created*/}
              <span>{getFileName(file.previewURL)}</span>
              <span>{file.webformatWidth + ' x ' + file.webformatHeight + '\n'}</span>
              <span>Created At: {getCreatedAt(file.previewURL)}</span>
          </div>
        </li>
      );
    });

    return output;
  }
  
  render() {
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