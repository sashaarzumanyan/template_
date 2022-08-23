import React, { useState } from 'react'
import { Box, Grid, Link, Typography, Grow } from '@mui/material'
import "./projects.css"
import TechnicalImage from "../../assets/Technical image.jpg"
import home2 from "../../assets/home2.jpg"
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages'
import { projectCard } from "../../_mock/projectInfoCard"
import ProjectCard from "../../components/ProjectCard"
import { useTranslation } from "react-i18next";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const [value, setValue] = useState('all');

    const navigate = useNavigate()


    const { t } = useTranslation()

    // const projectsContent = t("Our_projects");

    // const procurement = [
    //     "Scientific & Analytical Instrumentation",
    //     "Machineries & Implements",
    //     "Educational",
    //     "Environment & Energy",
    //     "Medical & Forensic",
    //     "Food Processing",
    //     "Information Technology",
    //     "Commodities",
    //     "Miscellaneous",
    // ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNavigate = (title) => {
        navigate('/details', {title})
    }
    const projectContent = t("Projects", { returnObjects: true });
    console.log('project', projectContent)
    return (
        <Box>
            <Grid container >
                <Grid item xs={12} md={5} lg={4} 
                   sx={{ padding: "4% 4% 10%" }}
                >
                    <Typography
                        variant='h2'
                        sx={{ color: "#042E76", marginBottom: "100px", }}
                    >
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><div>OUR PROJECTS</div></Grow>
                    </Typography>

                    <Box sx={{ width: "82%" }}>
                        {/* <Typography variant='p'>
                            <strong>AGT International</strong> operates worldwide and, throughout its 50 years of activity, it has gained experience in more than 80 countries. Main clients include national public administrations (i.e. Ministry of Agriculture, Ministry of the Environment, regional and local public agencies, etc.) as well as international institutions (i.e. European Commission, World Bank, Asian Development Bank, African Development Bank, United Nations, etc.) and private clients.
                        </Typography> */}
                        <Typography>{ projectContent.content }</Typography>
                    </Box>



                    <Box className='container' sx={{
                        display: "flex",
                        flexDirection: {
                            md: "column",
                            lg: "row"
                        }
                    }}>
                        {/* <Box className='menu'>
                            <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Technical Assistance</h3>
                            {technical_assistance.map((e, index) => {
                                return <a className='li'>{e}</a>
                            })}
                        </Box> */}


                        {/* <Box className='menu'>
                            <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Procurement</h3>
                            {procurement.map((e, index) => {
                                return <a className='li'>{e}</a>
                            })}
                        </Box> */}
                    </Box>
                </Grid>

                <Grid item xs={12} md={5} lg={5} sx={{ mt: { xs: 4 }, marginLeft: { xs: '15%' }, marginTop: { xs: '7%' }, display: { xs: 'none', md: 'block' } }}>
                    <div style={{ width: '80%', position: 'relative', display: 'block'}}><AnimatedImages image1={home2} image2={TechnicalImage}/></div>
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

            <Box sx={{ position: 'relative', width: '100%', typography: 'body1', mt: 4 }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',  padding: "0 3%" }}>
                        <TabList onChange={handleChange} sx={{ justifyContent: "space-around",  padding: "0 1%" }}>
                            <Tab label="Complated Projects" value="current" />
                            <Tab label="Current Projects" value="complated" />
                            <Tab label="Vodka Page" value="vodka" />
                        </TabList>
                    </Box>
                    <TabPanel value={value}>
                        <Grid container spacing={6} sx={{
                            padding: "100px 3%"
                        }}>
                            {projectCard.filter((card) => card.category === value || value === "all" ? card : null)
                                .map(({ title, text, image, dateInfo, category }) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={4}  >
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