import React from 'react';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
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
import { motion } from "framer-motion"


const Home = () => {

    const ul_list = [
        "The Company",
        "Our Mission",
        "Where we work and our main clients",
        "Our Strength",
        "Organisation and staff"
    ]


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

            <Box sx={{
                width: "90%",
                padding: "5%",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Box sx={{
                    width: "44%",
                    height: "80vh",
                    position: "relative"
                }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image={homeImg}
                        alt="img"
                        sx={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                    <Box sx={{
                        backgroundColor: "#f8f7f7",
                        width: "20%",
                        height: "60vh",
                        zIndex: 3,
                        position: "absolute",
                        bottom: 0,
                        right: "-14%"
                    }}></Box>
                </Box>

                <Box sx={{
                    width: "44%",
                    paddingLeft: "20%",
                }}>
                    <Box sx={{
                        width: "100%"
                    }}>
                        <Typography
                            variant='h4'
                            sx={{
                                color: "#042E76",
                                fontWeight: 600
                            }}
                        >
                            Job opportunities
                        </Typography>

                        <Box sx={{
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            fontWeight: 400
                        }}>
                            <Typography
                                variant='div'
                                sx={{
                                    padding: "5% 0"
                                }}
                            >
                                To check our latest job opportunities, click on “Search Now”  and  filter the results according to your job search criteria.
                            </Typography>

                            <Box sx={{
                                display: "flex"
                            }} >
                                <Typography
                                    variant='div'

                                >
                                    Search Now
                                </Typography>
                                <ArrowRightAltIcon
                                    sx={{
                                        marginLeft: "10px",
                                        fontSize: "25px",
                                        color: "#042E76"
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        width: "100%",
                        marginTop: "40px"
                    }}>
                        <Typography
                            variant='h4'
                            sx={{
                                color: "#042E76",
                                fontWeight: 600
                            }}
                        >
                            Register your CV
                        </Typography>

                        <Box sx={{
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            fontWeight: 400
                        }}>
                            <Typography
                                variant='div'
                                sx={{
                                    padding: "5% 0"
                                }}
                            >
                                To register for the first time, click on “Register” and follow the instructions.<br />

                                If registered already, insert your username and password and click on “Login”, to upload your updated CV or to modify your contact details.
                            </Typography>

                            <Box sx={{
                                display: "flex"
                            }} >
                                <Typography
                                    variant='div'

                                >
                                    To register your CV, please send an email to devito@agtinternational.it
                                </Typography>
                                <ArrowRightAltIcon
                                    sx={{
                                        margin: "10px 0 0 10px",
                                        fontSize: "25px",
                                        color: "#042E76"
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box >
                <h3 style={{
                    color: "#042E76"
                }}>Certifications - We are part of</h3>
                <Grid container>
                    <Grid item xs={3}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width:"300px",
                                height:"300px",
                            }}
                        >
                            <img src={Accredia} />
                        </motion.div>
                    </Grid>

                    <Grid item xs={3}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width:"300px",
                                height:"300px",
                            }}
                        >
                            <img src={Rina} />
                        </motion.div>
                    </Grid>

                    <Grid item xs={3}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width:"300px",
                                height:"300px",
                            }}
                        >
                            <img src={Porfse} />
                        </motion.div>
                    </Grid>

                    <Grid item xs={3}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width:"300px",
                                height:"300px",
                            }}
                        >
                            <img src={Psr} />
                        </motion.div>
                    </Grid>

                    <Grid item xs={3}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width:"300px",
                                height:"300px",
                            }}
                        >
                            <img src={Smartfish} />
                        </motion.div>
                    </Grid>

                </Grid>
            </Box>

        </div>
    )
}

export default Home
