import React, {Component} from 'react';

const Folders = (props) => {

  const renderFolders = () => {
    return props.folders.map(folder => {
      return (
        <li 
          key={folder}
          onClick={() => {props.handleFolderClick(folder)}}>
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