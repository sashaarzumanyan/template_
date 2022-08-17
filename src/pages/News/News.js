import React, { useState } from 'react'
import { Box, Chip, Grid, Link, Stack, Typography } from '@mui/material'
import { projectCard } from "../../_mock/projectInfoCard"
import ProjectCardI from "../../components/ProjectCard"

const News = () => {

    const[id, setId] = useState("grid")

    const handleClick = (e) => {
        setId(e)

    };

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

            <Stack direction="row" spacing={1} sx={{margin: "0 0 20px 40px"}}>
                <Chip label="Grid" variant={id==="grid"?"filled":"outlined"} onClick={()=>handleClick("grid")} sx={{width: "100px"}}/>
                <Chip label="List" variant={id==="list"?"filled":"outlined"} onClick={()=>handleClick("list")} sx={{width: "100px"}}/>
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
    )
}

export default News