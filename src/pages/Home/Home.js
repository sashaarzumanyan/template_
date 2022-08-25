import { Box, CardMedia, Grid, Grow, Stack, Typography } from '@mui/material';
import { motion } from "framer-motion";
import React from 'react';
import { useTranslation } from "react-i18next";
import Accredia from '../../assets/accredia.png';
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import homeImg from '../../assets/homeImg.png';
import Porfse from '../../assets/PORFSE.png';
import Psr from '../../assets/psr.png';
import Rina from '../../assets/rina.png';
import Smartfish from '../../assets/smartfish.png';
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages';
import HomeCard from '../../components/HomeCard';
import { homeCardInfo } from '../../_mock/homeCardInfo';
import "./home.css";


const Home = () => {
    const { t } = useTranslation();

    const imagesArray = [Accredia, Rina, Porfse, Psr, Smartfish]

    const team_specific = t("team_specific", { returnObjects: true });

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={2} sx={{height: {sm: "inherit", md: "70vh"}}} >
                <Grid item xs={12} md={5} lg={6} sx={{ width: "100%" }} >
                    <Stack spacing={2} sx={{ ml: 4 }} >
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><Typography variant='h2' sx={{ color: "#042E76" }}>RAF OJAKH</Typography></Grow>
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><Typography variant="p" sx={{ pt: 4, pb: 4 }}>{t("About_us")}</Typography></Grow>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={6} sx={{ mt: { xs: 4 }, display: { xs: 'none', md: 'block' } }}>
                    <div><AnimatedImages image1={home1} image2={home2} /></div>
                </Grid>
            </Grid>
            <div className='cardDiv'>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}>
                    <Grid container spacing={2}>
                        {homeCardInfo.map(({ title, image, resource }) => {
                            return (
                                <Grid item sm={12} md={6} sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                                    <HomeCard title={title} image={image} resource={resource} />
                                </Grid>
                            )
                        })}
                    </Grid></Grow>
            </div>

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" height="400" image={homeImg} alt="img" />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{}}>
                        <Stack spacing={2} sx={{ mb: 4 }}>
                            <Typography variant='h4' sx={{ color: "#042E76", fontWeight: 600 }}>
                                Our Team
                            </Typography>
                            <Typography variant='div'>
                                {t("Our_team")}
                            </Typography>
                            <h3 style={{ color: "#042E76" }}>Technical Assistance</h3>
                            <Box className='menu'>
                                {team_specific.map((e, index) => {
                                    return <a className='li'>{e}</a>
                                })}
                            </Box>
                        </Stack>
                    </Grid>
                </Grid></Grow>

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><Box sx={{ backgroundColor: '#f0f8ff' }}>
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
