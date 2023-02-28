import React from 'react'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

const Logo = () => {
  return (
    <div className="center ma4 mt0">
      <Tilt className='br2 shadow-2' style={{ height: '150px', width: '150px', background: 'linear-gradient(to right, #0099cc, #33cccc)' }}>
        <img src={brain} alt='brain logo' />
      </Tilt>
    </div>
  )
}

export default Logo