import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material'
import TechnicalImage from "../../assets/Technical image.jpg"
import home2 from "../../assets/home2.jpg"
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages'
import { projectCard } from "../../_mock/projectInfoCard"
import ProjectCardI from "../../components/ProjectCard"

const News = () => {

    return (
        <Box>
            <Grid container >
                <Grid xs={9} 
                    sx={{
                        padding: "5% 5% 10%"
                    }}
                >
                    <Typography
                        variant='h2'
                        sx={{
                            color: "#042E76",
                            marginBottom: "30px",
                        }}
                    >
                        NEWS
                    </Typography>

                    <Box sx={{ width: "82%" }}>
                        <Typography variant='p'>
                            Latest news from the media relations team of <strong>AGT International</strong>, leading consulting firm operating at national and international levels in the fields of agriculture, rural development, food safety and environment offering a wide range of services which include technical assistance, training and project/programme monitoring and evaluation, as well as procurement of high-tech instrumentation, machineries, scientific and agricultural commodities.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

            <Grid container spacing={6} sx={{
                padding: "10px 30px"
            }}>
                {projectCard.map(({ title, text, image, dateInfo }) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}  >
                            <ProjectCardI newsCard={true} image={image} text={text} title={title} dateInfo={dateInfo} />
                        </Grid>
                    )
                })}
            </Grid>

            {/* <Grid container spacing={6} sx={{
                padding: "10px 30px"
            }}>
                {projectCard.map(({ title, text, image, dateInfo }) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}  >
                            <ProjectCardI image={image} text={text} title={title} dateInfo={dateInfo} />
                        </Grid>
                    )
                })}
            </Grid> */}
        </Box>
    )
}

export default News