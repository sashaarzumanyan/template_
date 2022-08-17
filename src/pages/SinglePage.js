import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AnimatedImages from '../components/AnimatedImage/AnimatedImages'
import vector from '../assets/vector.jpg'

const SinglePage = ({pageTitle, paragraph, image1}) => {
    return (
        <div>
            <Grid container >
                <Grid xs={12} md={3} lg={5} sx={{ padding: "35px" }} >
                    <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "30px", }}>
                        {pageTitle}
                    </Typography>
                    <Box sx={{ width: "82%" }}>
                        <Typography>{paragraph}</Typography>
                    </Box>
                    {/* <Box className='container'
                        sx={{ display: "flex", flexDirection: { md: "column", lg: "row" } }}
                    >
                        <Box className='menu'>
                            <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Technical Assistance</h3>
                            {technical_assistance.map((e, index) => {
                                return <a className='li'>{e}</a>
                            })}
                        </Box>
                    </Box> */}
                </Grid>

                <Grid item xs={12} md={9} lg={7} sx={{ mt: { xs: 4 }, display: { xs: 'none', md: 'block' } }}>
                    <AnimatedImages image1={vector} image2={image1} />
                </Grid>
            </Grid>
        </div>
    )
}

export default SinglePage