import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages';
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import { homeCardInfo } from '../../_mock/homeCardInfo';
import "./home.css";
import HomeCard from '../../components/HomeCard';

const Home = () => {

    const ul_list = [
        "The Company",
        "Our Mission",
        "Where we work and our main clients",
        "Our Strength",
        "Organisation and staff"]


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={5} >
                    <Stack spacing={2} sx={{ ml: 4 }} >
                        <Typography variant='h2' sx={{ color: "#042E76" }}>MAKE THIS WORLD A BETTER PLACE</Typography>
                        <Typography variant="p" sx={{ pt: 4, pb: 4 }}>Established in 1969, <strong>AGT International</strong> (formerly <strong>AGROTEC S.p.A</strong>.) is a leading firm operating at both national and international levels in the fields of agricultural, rural development and environment offering a wide range of services which include technical assistance, and procurement of high-tech instrumentation and machineries.</Typography>
                        <Typography variant='h5' sx={{ fontWeight: "600", color: "#042E76" }}>Discover AGT International</Typography>
                        <Box >
                            <ul className='menu'>
                                {ul_list.map((e, index) => {
                                    return <li><a>{e}</a></li>
                                })}
                            </ul>
                        </Box>
                        <Link component="a" to="#" variant='h4' sx={{ fontWeight: "600", color: "#042E76" }}>Job Opportunities</Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={9} lg={7} sx={{ mt: { xs: 4 }, display: { xs: 'none', md: 'block' } }}>
                    <AnimatedImages image1={home1} image2={home2} />
                </Grid>
            </Grid>
            <div className='cardDiv'>
                <Grid container spacing={2} sx={{}}>
                    {homeCardInfo.map(({ title, image }) => {
                        return (
                            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                                <HomeCard title={title} image={image} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default Home