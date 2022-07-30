import React from 'react'
import './aboutPage.css'
import Picture1 from '../../assets/picture1.jpg'
import { Grid, Box, Typography } from '@mui/material'

const AboutUs = () => {
  return (
    <div className=''>
      <Grid container>
        <Grid item md={12} lg={6}>
          <img src={Picture1} alt='culture' style={{width: "100%"}} />
        </Grid>
        <Grid item md={12} lg={6}>
          <Box>
            <Typography>AGT International</Typography>
          </Box>
        </Grid>
      </Grid>
    </div >
  )
}

export default AboutUs



