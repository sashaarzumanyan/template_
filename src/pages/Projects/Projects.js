import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Grid, Grow, Pagination, Typography } from '@mui/material'
import Tab from '@mui/material/Tab'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import home2 from "../../assets/home2.jpg"
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages'
import ProjectCard from "../../components/ProjectCard"


import "./projects.css"

const img = "https://scontent-sof1-2.xx.fbcdn.net/v/t1.6435-9/72479907_136108361135975_7467945381729402880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=uvMT-Sa8qDcAX-p9DNy&_nc_ht=scontent-sof1-2.xx&oh=00_AT-BNxbXFW6m6_9cdVNTEe-Ut0n2BFBj62qulDsddBdUnw&oe=6330A745"

const Projects = () => {
    const [value, setValue] = useState('all');
    const { t } = useTranslation();
    const [projects, getProjects] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalCount, setTotal] = useState();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPage(1);

    };

    useEffect(() => {
        axios.get(`http://localhost:3001/projects?_page=${page}&_limit=6&${value !== "all" ? `category=${value}` : null}`)
            .then(res => getProjects(res.data))

        axios.get(`http://localhost:3001/projects?${value !== "all" ? `category=${value}` : null}`)
            .then(res => setTotal(res.data.length))

        console.log(Math.ceil(7 / 6));

    }, [page, value])

    const projectContent = t("Projects", { returnObjects: true });

    return (
        <Box sx={{ padding: "4% 4% 10%" }}>
            <Grid container sx={{ height: { md: "70vh", xs: "inherit", } }} >
                <Grid item xs={12} md={5} lg={6}>
                    <Typography variant='h2' sx={{ color: "#042E76" }}>
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>OUR PROJECTS</div></Grow>
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Typography>{projectContent.content}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <div ><AnimatedImages image1={home2} image2={img} /></div>
                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', width: '100%', typography: 'body1', mt: 4 }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} sx={{ justifyContent: "space-around" }}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable auto tabs example">
                            <Tab label="Complated Projects" value="current" />
                            <Tab label="Current Projects" value="complated" />
                            <Tab label="Vodka Page" value="vodka" />
                            <Tab label="All Projects" value="all" />
                        </TabList>
                    </Box>
                    <TabPanel value={value}>
                        <Grid container spacing={2} >
                            {projects
                                .map(({ title, text, image, dateInfo, category }) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: "baseline" }} >
                                            <ProjectCard image={image} resource={'Projects'} text={text} title={title} dateInfo={dateInfo} />
                                        </Grid>
                                    )
                                })
                            }
                            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                                <Pagination
                                    page={page}
                                    count={Math.ceil(totalCount / 6)} variant="outlined" shape="rounded"
                                    onChange={handleChangePage}
                                />
                            </div>
                        </Grid>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Projects