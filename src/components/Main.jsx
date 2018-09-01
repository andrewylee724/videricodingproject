import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Folders from '../containers/Folders.jsx';
import Content from './Content.jsx';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super()

    this.state = {
      folders: ['Clouds', 'Cars', 'Birds'],
      selectedFolder: 'Clouds',
      currFiles: [],
    }

    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.getFiles = this.getFiles.bind(this);
  }

  handleFolderClick(folder) {
    console.log('folder is clicked! setting selectedFolder to:', folder);

    this.getFiles(folder);
  }

  getFiles(folder) {
    console.log('getFiles() wtih this folder:', folder)
    const url = 'https://pixabay.com/api';

    let params = {
      key: '9974841-d5eaa6de283f7e2309339b945',
      q: folder,
      lang: 'en',
      image_type: 'all',
      order: 'popular',
    }

    axios.get(url, {
      params: params,
    })
    .then( results => {
      let fetchedFiles = results.data.hits.splice(0,49);
      console.log('success!', fetchedFiles);

      //sort the files by name
      fetchedFiles.forEach(file => {
        file.fileName = this.getFileName(file.previewURL);
        file.createdAt = this.getCreatedAt(file.previewURL);
      })

      fetchedFiles.sort(function(a, b) {
        let nameA = a.fileName;
        let nameB = b.fileName;

        return nameA.localeCompare(nameB, 'en', {ignorePunctuation: true});
      });

      this.setState({
        selectedFolder: folder,
        currFiles: fetchedFiles,
      })
    })
    .catch( error => {
      console.error('error in pixabay get request', error);
    });
  }

  getFileName(str) {
    let fileNames = str.split('/');
    return fileNames[fileNames.length - 1];
  }

  getCreatedAt(str) {
    let splits = str.split('/');
    return splits[5] + '/' + splits[6] + '/' + splits[4];
  }

  render() {
    return (
      <div className="main" >
        <NavBar />
        <Folders 
          folders={this.state.folders}  
          handleFolderClick={this.handleFolderClick}
        />
        <Content 
          selectedFolder={this.state.selectedFolder} 
          currFiles={this.state.currFiles}
          getFiles={this.getFiles}
        />
      </div>
    )
  }

}

export default Main;