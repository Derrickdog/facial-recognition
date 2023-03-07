import React from 'react'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f2'>
        Input image link to detect image concepts
      </p>
      <div className='center'>
        <div className="center pa4 br3 shadow-5" style={{width: '700px', background: 'linear-gradient(to right, #0099cc, #33cccc)'}}>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-blue' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm