import { Box, Chip, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AnimatedImages from '../components/AnimatedImage/AnimatedImages'
import { projectCard } from "../_mock/projectInfoCard"
import ProjectCardI from "../components/ProjectCard"
import vector from '../assets/vector.jpg'

const SinglePage = ({ pageTitle, paragraph, image1 }) => {
    const [id, setId] = useState("grid")

    const handleClick = (e) => {
        setId(e)

    };
    return (
        <div>
            <Grid container sx={{height: {xs: null, md: "650px"}}} >
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
            <Box>
                <Stack direction="row" spacing={1} sx={{ margin: "0 0 20px 40px" }}>
                    <Chip label="Grid" variant={id === "grid" ? "filled" : "outlined"} onClick={() => handleClick("grid")} sx={{ width: "100px" }} />
                    <Chip label="List" variant={id === "list" ? "filled" : "outlined"} onClick={() => handleClick("list")} sx={{ width: "100px" }} />
                </Stack>

                <Grid container spacing={6} sx={{
                    padding: "10px 30px"
                }}>
                    {projectCard.map(({ title, text, image, dateInfo }) => {
                        return (
                            <Grid item xs={12} sm={12} md={6} lg={4}  >
                                <ProjectCardI cardStyle={id} newsCard={true} image={image} text={text} title={title} dateInfo={dateInfo} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default SinglePage