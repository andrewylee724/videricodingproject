import React, {Component} from 'react';
import './Folders.css';

const Folders = (props) => {

  const renderFolders = () => {
    console.log('pathname is:', window.location.pathname);
    return props.folders.map(folder => {
      return (
        <li 
          key={folder}
          onClick={() => {props.handleFolderClick(folder)}}>
          {/* <img src='/assets/folder_on@2x.png'/> */}
          {folder}
        </li>
      )
    })
  }


  return (
    <div className="folders">
      <ul>
        {renderFolders()}
      </ul>
    </div>
  );

}

export default Folders;