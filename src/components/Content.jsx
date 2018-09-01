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

  // getFiles() {
  //   console.log('getFiles() wtih this folder:', this.state.selectedFolder)
  //   const url = 'https://pixabay.com/api';

  //   let params = {
  //     key: '9974841-d5eaa6de283f7e2309339b945',
  //     q: this.state.selectedFolder,
  //     lang: 'en',
  //     image_type: 'all',
  //     order: 'popular',
  //   }

  //   axios.get(url, {
  //     params: params,
  //   })
  //   .then( results => {
  //     let fetchedFiles = results.data.hits.splice(0,49);
  //     console.log('success!', fetchedFiles);

  //     //sort the files by name
  //     fetchedFiles.forEach(file => {
  //       file.fileName = this.getFileName(file.previewURL);
  //       file.createdAt = this.getCreatedAt(file.previewURL);
  //     })

  //     fetchedFiles.sort(function(a, b) {
  //       let nameA = a.fileName;
  //       let nameB = b.fileName;

  //       return nameA.localeCompare(nameB, 'en', {ignorePunctuation: true});
  //     });

  //     this.setState({
  //       currFiles: fetchedFiles,
  //     })
  //   })
  //   .catch( error => {
  //     console.error('error in pixabay get request');
  //   });

  //   this.props.getFiles();
  // }

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