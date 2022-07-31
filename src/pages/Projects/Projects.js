import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material'
import "./projects.css"
import SouthIcon from '@mui/icons-material/South';

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
            <Grid container>
                <Grid item xs={6}
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



                    <Box className='container'>
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

                <Grid item xs={6}></Grid>
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
        </Box>
    )
}

export default Projects