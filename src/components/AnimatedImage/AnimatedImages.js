import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./animatedImage.css"

const AnimatedImages = ({ image1, image2 }) => {
  // const [animate, setAnimate] = useState(true)

  // const imageLoaded = () => {
  //   setAnimate(false);
  //   setTimeout(() => setPulsing(false), 600);
  // };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setAnimate(true)
  //   },500)
  //   // return (
  //   //   setAnimate(false)
  //   // )
  // },[])

  return (
    <div style={{ width: "100%" }} >
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='blueDiv'
        ></motion.div>
      </div>
    </div>
  )
}

export default AnimatedImages