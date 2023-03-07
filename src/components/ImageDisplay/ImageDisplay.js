import React from 'react'

const ImageDisplay = ({ imageUrl, concepts }) => {
  if (imageUrl !== ''){
    return (
      <div className='center ma5'>
        <div className="absolute">
          <img src={imageUrl} alt='input' width='500px'/>
          <div class="mb5 mt4">
            {
            concepts.map((concept) => (
            // <span class='f3'>{concept.name}, </span>
            <div class='f3'>{concept.name}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ImageDisplay