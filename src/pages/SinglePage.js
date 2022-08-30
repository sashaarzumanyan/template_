import CircleIcon from '@mui/icons-material/Circle';
import { Box, Chip, Grid, Grow, ListItem, ListItemIcon, ListItemText, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import vector from '../assets/vector.jpg';
import AnimatedImages from '../components/AnimatedImage/AnimatedImages';
import ProjectCardI from "../components/ProjectCard";
import { setPageProps } from '../redux/actions/setPageInfo';
import { projectCard } from "../_mock/projectInfoCard";
import { useSelector } from 'react-redux';
import axios from 'axios'


const SinglePage = ({ resource, image1, image2, section, pageTitle }) => {

    const [projects, getProjects] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalCount, setTotal] = useState()
    const { singlePageInfo } = useSelector(state => state);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const { t } = useTranslation();
    const [id, setId] = useState("grid")
    const dispatch = useDispatch();
    const handleClick = (e) => {
        setId(e)
        dispatch(setPageProps({
            image1: image1,
            image2: image1,
            section,
            resource,
        }))
    };


    useEffect(() => {
        axios.get(`http://localhost:3001/projects?_page=${page}&_limit=6`)
            .then(res => getProjects(res.data))

        axios.get(`http://localhost:3001/projects?`)
            .then(res => setTotal(res.data.length))

    }, [page])

    const resourceObject = t(resource, { returnObjects: true });
    const item = Array.isArray(resourceObject) && section ? resourceObject.find(r => r.section === section) : resourceObject;
    console.log('item', item)
    return (
        <Grid container sx={{ padding: "4% 4% 10%" }}>
            <Grid item xs={12} md={12} lg={6} sx={{ padding: "35px", height: {md:!item ? "60vh": "auto"}  }} >
                <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><Typography variant='h2' sx={{ color: "#042E76", marginBottom: "40px", fontSize: { xs: "2rem", sm: "3.75rem" } }}>
                    {item.title ? item.title : singlePageInfo.pageTitle}
                </Typography></Grow>
                <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><Box sx={{ width: "82%" }}>
                    <Typography>  {item.content || singlePageInfo.paragraph}</Typography>
                </Box></Grow>
                {
                    !item.characteristics_title
                        ? null
                        : (
                            <div style={{ position: 'relative', paddingTop: '5vh', paddingBottom: '5vh' }}>
                                <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><Box sx={{ width: "82%" }}>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            width: '100%',
                                            position: "relative",
                                            bottom: "10%",
                                            color: "042E76",
                                            // textAlign: "left",
                                            fontWeight: "600",
                                        }}>
                                        {item.characteristics_title}
                                    </Typography>
                                </Box></Grow>
                            </div>

                        )
                }
                {
                    !item.characteristics
                        ? null
                        : (
                            <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><Box sx={{ width: "82%" }}>
                                <Typography variany="h4" sx={{ paddingBottom: '7vh', fontStyle: 'italic' }}>  {item.characteristics || ''}</Typography>
                            </Box></Grow>
                        )
                }

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

            <Grid item xs={12} md={7} lg={6} sx={{ mt: { xs: 4 }, paddingLeft: { md: '3%' }, display: { xs: 'none', lg: 'block' } }}>
                <div >
                    <AnimatedImages image1={vector} image2={image1} />
                </div>
            </Grid>
            {
                !item.characteristics_features
                    ? null
                    : (
                        <Box>
                            <Grid spacing={2} container xs={12} md={12} lg={12} sx={{ color: "#042E76", margin: "10px 0", width: "100%" }}>
                                {item.characteristics_features.map((e, i) => {
                                    return (
                                        <Grid item md={4} >
                                            <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><ListItem disablePadding>
                                                <ListItemIcon>
                                                    <CircleIcon fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={e} />
                                            </ListItem>
                                            </Grow>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    )
            }
            <Box sx={{}}>
                <Stack direction="row" spacing={1} sx={{ margin: "10% 0 3% 2%" }}>
                    <Chip label="Grid" variant={id === "grid" ? "filled" : "outlined"} onClick={() => handleClick("grid")} sx={{ width: "100px" }} />
                    <Chip label="List" variant={id === "list" ? "filled" : "outlined"} onClick={() => handleClick("list")} sx={{ width: "100px" }} />
                </Stack>

                <Grid container spacing={6} sx={{
                    padding: "3% 2%"
                }}>
                    {projects.map(({ title, text, image, dateInfo }) => {
                        return (
                            <Grid item xs={12} sm={12} md={6} lg={4}  >
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
                </Grid>
            </Box>
        </Grid >
    )
}

export default SinglePage