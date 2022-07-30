import React from 'react'
import './aboutPage.css'
import Picture1 from '../../assets/picture1.jpg'
import { Grid, Box, Typography } from '@mui/material'
import { articleInfo } from '../../_mock/aboutPageContext';
import InfoArticle from '../../components/InfoArticle';


const AboutUs = () => {
  return (
    <div className=''>
      {articleInfo.map((item, index) => {
        return <InfoArticle image={item.image} text={item.text} title={item.title} index={index}/>
      })}
    </div >
  )
}

export default AboutUs



