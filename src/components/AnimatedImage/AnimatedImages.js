import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./animatedImage.css"

const AnimatedImages = ({ image1, image2 }) => {

  return (
      <div className='firstImg'>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='img1'
          src={image1}
          alt='animImage'
        />
        <motion.img
          className='img2'
          src={image2}
          alt='animImage2'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='blueDiv'
        />
      </div>
  )
}

export default AnimatedImages