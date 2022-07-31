import React from 'react';
import "./animatedImage.css"

const AnimatedImages = ({ image1, image2 }) => {

  return (
    <div style={{position: "relative"}}>
      <div className='firstImg'>
        <img className='' src={image1} alt='animImage' />
      </div>
      <div className='secondImg'>
        <img className='' src={image2} alt='animImage2' />
      </div>
      <div className='blueDiv'>
      <div ></div>
      </div>
    </div>
  )
}

export default AnimatedImages