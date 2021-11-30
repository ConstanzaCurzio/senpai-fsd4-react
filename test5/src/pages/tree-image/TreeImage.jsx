import React, { useState } from 'react';

import './TreeImage.css';

const TreeImage = () => {
  const [showImage, setShowImage] = useState(false);

  const showOrHideImage = () => {
    setShowImage(!showImage);
  }

  return (
    <div className="treeImageContainer">
      <button onClick={showOrHideImage} className="showHideButton">
        Show or hide
      </button>

      {/* USING && */}
      {showImage && (
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt="tree"
          className="treeImage"
        />
      )}
      {!showImage && (
        <span>No image</span>
      )}

      {/* TERNARY */}
      {/* {showImage ? (
               <img
               src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
               alt="tree"
               className="treeImage"
             />
      ) : (
        <span>No image</span>
      )} */}
    </div>
  )
}

export default TreeImage;
