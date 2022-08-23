import React, { useState } from 'react'
import { Box, Chip, Grid, Link, Stack, Typography, Grow } from '@mui/material'
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
                    sx={{ padding: "4% 4% 10%" }}
                >
                    <Typography
                        variant='h2'
                        sx={{
                            color: "#042E76",
                            marginBottom: "100px",
                        }}
                    >
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><div>News</div></Grow>
                    </Typography>

                    <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...( { timeout: 1500 })}><Box sx={{ width: "82%" }}>
                        <Typography variant='p'>
                            Latest news from the media relations team of <strong>AGT International</strong>, leading consulting firm operating at national and international levels in the fields of agriculture, rural development, food safety and environment offering a wide range of services which include technical assistance, training and project/programme monitoring and evaluation, as well as procurement of high-tech instrumentation, machineries, scientific and agricultural commodities.
                        </Typography>
                    </Box></Grow>
                </Grid>

            </Grid>

            <Stack direction="row" spacing={1} sx={{margin: "0 0 10px 4%"}}>
                <Grow in={true} style={{ transformOrigin: '0 0 1' }} {...( { timeout: 1500 })}><Chip label="Grid" variant={id==="grid"?"filled":"outlined"} onClick={()=>handleClick("grid")} sx={{width: "100px"}}/></Grow>
                <Grow in={true} style={{ transformOrigin: '1 0 1' }} {...( { timeout: 1500 })}><Chip label="List" variant={id==="list"?"filled":"outlined"} onClick={()=>handleClick("list")} sx={{width: "100px"}}/></Grow>
            </Stack>

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Grid container spacing={6} sx={{ padding: "4% 4% 10%" }}>
                {projectCard.map(({ title, text, image, dateInfo }) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}  >
                            <ProjectCardI cardStyle={id} newsCard={true} image={image} text={text} title={title} dateInfo={dateInfo} />
                        </Grid>
                    )
                })}
            </Grid></Grow>

           
        </Box>
    )
}

export default News