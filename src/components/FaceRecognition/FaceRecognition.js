import React from 'react'

const FaceRecognition = ({ imageUrl, concepts }) => {
  if (imageUrl !== ''){
  return (
    <div className='center ma5'>
      <div className="absolute">
        <img src={imageUrl} alt='input' width='500px'/>
        {concepts.map((concept) => (
          <p>{concept.name}</p>
        ))}
      </div>
    </div>
  )
  }
}

export default FaceRecognition