import { Box, Chip, Grid, Stack, Typography, Grow, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import CircleIcon from '@mui/icons-material/Circle';
import AnimatedImages from '../components/AnimatedImage/AnimatedImages'
import { setPageProps } from '../redux/actions/setPageInfo'
import { projectCard } from "../_mock/projectInfoCard"
import ProjectCardI from "../components/ProjectCard"
import vector from '../assets/vector.jpg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SinglePage = ({ resource, image1, image2, section }) => {
    const { t } = useTranslation();
    const [id, setId] = useState("grid")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
        setId(e)
        dispatch(setPageProps({
            image1: image1,
            image2: image1,
            section,
            resource,
        }))
    };

    const resourceObject = t(resource, { returnObjects: true });
    const item = Array.isArray(resourceObject) && section ? resourceObject.find(r => r.section === section) : resourceObject;
    console.log('item', item)
    return (
        <Grid container sx={{ height: { padding: "4% 4%" } }}>
            <Grid item xs={12} md={12} lg={6} sx={{ padding: "35px" }} >
                <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><Typography variant='h2' sx={{ color: "#042E76", marginBottom: "40px" }}>
                    {item.title}
                </Typography></Grow>
                <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}><Box sx={{ width: "82%" }}>
                    <Typography>  {item.content || ''}</Typography>
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
                {
                    !item.characteristics_features
                        ? null
                        : (
                            <Grid spacing={2} container xs={12} md={12} lg={12} sx={{ color: "#042E76", margin: "10px 0", width: "80%" }}>
                                {item.characteristics_features.map((e, i) => {
                                    return (
                                        <Grid item md={12} >
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

            <Grid item xs={12} md={12} lg={6} sx={{ mt: { xs: 4 }, paddingLeft: { md: '3%' }, display: { xs: 'none', md: 'block' } }}>
                <div style={{ width: '80%', position: 'relative', display: 'block' }}>
                    <AnimatedImages style={{ width: '80%', position: 'relative', display: 'block' }} image1={vector} image2={image1} />
                </div>
            </Grid>
            <Box sx={{ position: 'relative' }}>
                <Stack direction="row" spacing={1} sx={{ margin: "10% 0 3% 2%" }}>
                    <Chip label="Grid" variant={id === "grid" ? "filled" : "outlined"} onClick={() => handleClick("grid")} sx={{ width: "100px" }} />
                    <Chip label="List" variant={id === "list" ? "filled" : "outlined"} onClick={() => handleClick("list")} sx={{ width: "100px" }} />
                </Stack>

                <Grid container spacing={6} sx={{
                    padding: "3% 2%"
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
        </Grid>
    )
}

export default SinglePage