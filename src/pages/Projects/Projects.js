import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Grid, Grow, Typography } from '@mui/material'
import Tab from '@mui/material/Tab'
import React, { useState } from 'react'
import { useTranslation } from "react-i18next"
import home2 from "../../assets/home2.jpg"
import TechnicalImage from "../../assets/Technical image.jpg"
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages'
import ProjectCard from "../../components/ProjectCard"
import { projectCard } from "../../_mock/projectInfoCard"
import "./projects.css"

const Projects = () => {
    const [value, setValue] = useState('all');
    const { t } = useTranslation();


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const projectContent = t("Projects", { returnObjects: true });

    return (
        <Box>
            <Grid container sx={{height: {md: "70vh", xs: "inherit"}}} >
                <Grid item xs={12} md={5} lg={6}>
                    <Typography variant='h2' sx={{ color: "#042E76" }}>
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>OUR PROJECTS</div></Grow>
                    </Typography>
                    <Box >
                        <Typography>{projectContent.content}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7} lg={6} sx={{  display: { xs: 'none', md: 'block' } }}>
                    <div ><AnimatedImages image1={home2} image2={TechnicalImage} /></div>
                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', width: '100%', typography: 'body1', mt: 4 }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} sx={{ justifyContent: "space-around"}}>
                            <Tab label="Complated Projects" value="current" />
                            <Tab label="Current Projects" value="complated" />
                            <Tab label="Vodka Page" value="vodka" />
                        </TabList>
                    </Box>
                    <TabPanel value={value}>
                        <Grid container spacing={2} >
                            {projectCard.filter((card) => card.category === value || value === "all" ? card : null)
                                .map(({ title, text, image, dateInfo, category }) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={4}  sx={{display: "flex" , justifyContent: "center", alignItems: "baseline"}} >
                                            <ProjectCard image={image} resource={'Projects'} text={text} title={title} dateInfo={dateInfo} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Projects