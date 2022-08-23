import React from 'react';
import { Box, CardMedia, Grid, Stack, Typography, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages';
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import { homeCardInfo } from '../../_mock/homeCardInfo';
import "./home.css";
import HomeCard from '../../components/HomeCard';
import homeImg from '../../assets/homeImg.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Accredia from '../../assets/accredia.png'
import Rina from '../../assets/rina.png'
import Porfse from '../../assets/PORFSE.png'
import Psr from '../../assets/psr.png'
import Smartfish from '../../assets/smartfish.png'
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"


const Home = () => {
    const { t } = useTranslation();

    const imagesArray = [Accredia, Rina, Porfse, Psr, Smartfish]

    const ul_list = t("Industries", { returnObjects: true });
    const team_specific = t("team_specific", { returnObjects: true });

    return (
        <Grid item xs={12} md={5} lg={4} 
                   sx={{ padding: "4% 3% 10%" }}
                >
            <Grid container spacing={2} sx={{height: "650px"}}>
                <Grid item xs={12} md={6} lg={5} >
                    <Stack spacing={2} sx={{ ml: 4 }} >
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Typography variant='h2' sx={{ color: "#042E76" }}>RAF OJAKH</Typography></Grow>
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Typography variant="p" sx={{ pt: 4, pb: 4 }}>{t("About_us")}</Typography></Grow>
                        {/* <Link component="a" to="#" variant='h4' sx={{ fontWeight: "600", color: "#042E76" }}>Job Opportunities</Link> */}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={7} sx={{ mt: { xs: 4 }, display: { xs: 'none', md: 'block' } }}>
                    <div style={{ paddingLeft: '15%', width: '80%', position: 'relative', display: 'block'}}><AnimatedImages image1={home1} image2={home2} /></div>
                </Grid>
            </Grid>
            <div className='cardDiv'>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Grid container spacing={2} sx={{ backgroundColor: '#f0f8ff'}}>
                    {homeCardInfo.map(({ title, image, resource }) => {
                        return (
                            <Grid item sm={12} md={6} sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                                <HomeCard title={title} image={image} resource={resource} />
                            </Grid>
                        )
                    })}
                </Grid></Grow>
            </div>

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Box
                sx={{
                    width: "90%",
                    padding: "5%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs:"center", sm: "center", md: "flex-start" },
                    flexDirection: {xs: "column", sm: "column", md: "row" }
                }}
            >
                <Box sx={{ height: "80vh", position: "relative", pb: { sm: "20px", md: "0" } }}>
                    <CardMedia component="img" height="220" image={homeImg} alt="img" sx={{ width: "100%", height: "100%" }} />
                    <Box
                        sx={{
                            backgroundColor: "#f0f8ff",
                            width: "20%",
                            height: "60vh",
                            zIndex: 3,
                            position: "absolute",
                            bottom: 0,
                            right: "-14%"
                        }}></Box>
                </Box>

                <Box sx={{ width: { sm: "90%", md: "44%" }, paddingLeft: { sm: 0, md: "20%" } }}>
                    <Box sx={{ width: "100%" }}>
                        <Typography variant='h4' sx={{ color: "#042E76", fontWeight: 600 }}>
                            Our Team
                        </Typography>

                        <Box
                            sx={{
                                width: "90%",
                                display: "flex",
                                flexDirection: "column",
                                fontWeight: 400
                            }}>
                            <Typography variant='div' sx={{ padding: "5% 0" }}>
                                {t("Our_team")}
                            </Typography>
                            <Box className='menu'>
                                <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Technical Assistance</h3>
                                {team_specific.map((e, index) => {
                                    return <a className='li'>{e}</a>
                                })}
                            </Box>

                            {/* <Box sx={{ display: "flex" }} >
                                <Typography variant='div'>
                                    Search Now
                                </Typography>
                                <ArrowRightAltIcon sx={{ marginLeft: "10px", fontSize: "25px", color: "#042E76" }} />
                            </Box> */}
                        </Box>
                    </Box>
                </Box>
            </Box></Grow>
            {/* 
                    <Box sx={{ width: "100%", marginTop: "40px" }}>
                        <Typography variant='h4' sx={{ color: "#042E76", fontWeight: 600 }}>
                            Register your CV
                        </Typography>

                        <Box sx={{ width: "90%", display: "flex", flexDirection: "column", fontWeight: 400 }}>
                            <Typography
                                variant='div'
                                sx={{ padding: "5% 0" }}
                            >
                                To register for the first time, click on “Register” and follow the instructions.<br />
                                If registered already, insert your username and password and click on “Login”, to upload your updated CV or to modify your contact details.
                            </Typography>

                            <Box sx={{ display: "flex" }} >
                                <Typography variant='div'>
                                    To register your CV, please send an email to devito@agtinternational.it
                                </Typography>
                                <ArrowRightAltIcon sx={{ margin: "10px 0 0 10px", fontSize: "25px", color: "#042E76" }} />
                            </Box>
                        </Box>
                    </Box> */}


<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Box sx={{ backgroundColor: '#f0f8ff' }}>
                <h3 style={{ color: "#042E76", textAlign: "center" }}>Certifications - We are part of</h3>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap" }}>
                    {imagesArray.map((img, index) => {
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 0.8 }}
                                whileTap={{ scale: 1 }}
                            // style={{ width: "100px" }}
                            >
                                <img src={img} style={{ maxWidth: "175px" }} />
                            </motion.div>
                        )
                    })}
                </Box>
            </Box></Grow>

        </Grid>
    )
}

export default Home
