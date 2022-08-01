import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material'
import "./projects.css"
import TechnicalImage from "../../assets/Technical image.jpg"
import home2 from "../../assets/home2.jpg"
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages'
import {projectCard} from "../../_mock/projectInfoCard"
import ProjectCardI from "../../components/ProjectCard"

const Projects = () => {

    const technical_assistance = [
        "Agriculture and Rural Development",
        "Agro-Industry, Marketing and Trade",
        'Animal Health, Fisheries and Food Safety',
        "Environment and Energy",
        "Monitoring & Evaluation",
    ]

    const procurement = [
        "Scientific & Analytical Instrumentation",
        "Machineries & Implements",
        "Educational",
        "Environment & Energy",
        "Medical & Forensic",
        "Food Processing",
        "Information Technology",
        "Commodities",
        "Miscellaneous",
    ]


    return (
        <Box>
            <Grid container >
                <Grid xs={12} md={3} lg={5}
                    sx={{
                        padding: "35px"
                    }}
                >
                    <Typography
                        variant='h2'
                        sx={{
                            color: "#042E76",
                            marginBottom: "30px",
                        }}
                    >
                        PROJECTS
                    </Typography>

                    <Box sx={{ width: "82%" }}>
                        <Typography variant='p'>
                            <strong>AGT International</strong> operates worldwide and, throughout its 50 years of activity, it has gained experience in more than 80 countries. Main clients include national public administrations (i.e. Ministry of Agriculture, Ministry of the Environment, regional and local public agencies, etc.) as well as international institutions (i.e. European Commission, World Bank, Asian Development Bank, African Development Bank, United Nations, etc.) and private clients.
                        </Typography>
                    </Box>



                    <Box className='container' sx={{
                        display:"flex",
                        flexDirection: {
                            md: "column",
                            lg: "row"
                        }
                    }}>
                        <Box className='menu'>
                            <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Technical Assistance</h3>
                            {technical_assistance.map((e, index) => {
                                return <a className='li'>{e}</a>
                            })}
                        </Box>


                        <Box className='menu'>
                            <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Procurement</h3>
                            {procurement.map((e, index) => {
                                return <a className='li'>{e}</a>
                            })}
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={9} lg={7} sx={{mt: {xs:4}, display:{xs: 'none', md: 'block'}}}>
                    <AnimatedImages image1={home2} image2={TechnicalImage} />
                </Grid>
            </Grid>

            {/* <Box className='navLists'>
                <Box classname='lists'>
                    <a>Grid</a>
                    <a>List</a>
                    <a>Map</a>
                </Box>
                <Box classname='pagination'>
                    12/143
                </Box>
                <Box classname='filters'>
                    <Typography>Filters</Typography>
                    <SouthIcon />
                </Box>
            </Box> */}

            <Grid container spacing={6} sx={{
                padding: "10px 30px"
            }}>
                {projectCard.map(({title,text, image, dateInfo})=>{
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}  >
                            <ProjectCardI image={image} text= {text} title={title} dateInfo={dateInfo}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Projects