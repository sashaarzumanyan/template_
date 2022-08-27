import { Box, Chip, Divider, Grid, Grow, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProjectCardI from "../../components/ProjectCard"
import { projectCard } from "../../_mock/projectInfoCard"
import axios from 'axios'


const News = () => {

    const [id, setId] = useState("grid");
    const [projects, getProjects] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalCount, setTotal] = useState()

    const handleClick = (e) => {
        setId(e)
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/projects?_page=${page}&_limit=6`)
            .then(res => getProjects(res.data))

        axios.get(`http://localhost:3001/projects`)
            .then(res => setTotal(res.data.length))

    }, [page])

    return (
        <Box sx={{ padding: "4% 4% 10%" }}>
            <Grid container >
                <Grid xs={12} md={9}>
                    <Typography
                        variant='h2'
                        sx={{ color: "#042E76", marginBottom: "50px", }} >
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>News</div></Grow>
                    </Typography>

                    <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...({ timeout: 1500 })}><Box sx={{ width: "100%" }}>
                        <Typography variant='p'>
                            Latest news from the media relations team of <strong>AGT International</strong>, leading consulting firm operating at national and international levels in the fields of agriculture, rural development, food safety and environment offering a wide range of services which include technical assistance, training and project/programme monitoring and evaluation, as well as procurement of high-tech instrumentation, machineries, scientific and agricultural commodities.
                        </Typography>
                    </Box></Grow>
                </Grid>

            </Grid>
            <Divider sx={{ margin: "15px 0" }} />

            <Box>
                <Stack direction="row" spacing={2} sx={{ margin: "0 0 20px 4%" }} >
                    <Grow in={true} style={{ transformOrigin: '0 0 1' }} {...({ timeout: 1500 })}><Chip label="Grid" variant={id === "grid" ? "filled" : "outlined"} onClick={() => handleClick("grid")} sx={{ width: "100px" }} /></Grow>
                    <Grow in={true} style={{ transformOrigin: '1 0 1' }} {...({ timeout: 1500 })}><Chip label="List" variant={id === "list" ? "filled" : "outlined"} onClick={() => handleClick("list")} sx={{ width: "100px" }} /></Grow>
                </Stack>

                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}>
                    <Grid container spacing={8} >
                        {projects.map(({ title, text, image, dateInfo }) => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: "baseline" }}  >
                                    <ProjectCardI cardStyle={id} newsCard={true} image={image} text={text} title={title} dateInfo={dateInfo} />
                                </Grid>
                            )
                        })}
                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <Pagination
                                page={page}
                                count={Math.ceil(totalCount / 6)} variant="outlined" shape="rounded"
                                onChange={handleChangePage}
                            />
                        </div>
                    </Grid></Grow>
            </Box>


        </Box>
    )
}

export default News