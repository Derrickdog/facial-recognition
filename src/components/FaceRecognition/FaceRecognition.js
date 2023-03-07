import React from 'react'

const FaceRecognition = ({ imageUrl, concepts }) => {
  if (imageUrl !== ''){
  return (
    <div className='center ma5'>
      <div className="absolute">
        <img src={imageUrl} alt='input' width='500px'/>
        <div class="ma5 ">
          {concepts.map((concept) => (
            <span class='f2'>{concept.name}, </span>
          ))}
        </div>
      </div>
    </div>
  )
  }
}

export default FaceRecognition