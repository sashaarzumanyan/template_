import React from 'react'
import { Box, Grid, Stack, Typography, Grow } from '@mui/material';
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages';
import { useTranslation } from "react-i18next";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";

const Contact = () => {
    const {t} = useTranslation();
    return (
        <Grid container sx={{ height: "80vh", padding: "4% 4%" }}>
            <Grid item xs={12} md={6} lg={6} 
            >
            <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "100px" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><div>CONTACTS</div></Grow>
            </Typography>
                <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...( { timeout: 1500 })}><Box sx={{ width: "100%", margin: "30px auto" }}>
                    <Typography variant='p'>
                        We think that together we can afford and solve every challenge. We are eager to find connections between our partners and the society, to better understand the world and shape the future. If you have an idea, a proposal or simply information, don’t hesitate to contact us.
                    </Typography>
                </Box></Grow>
                <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...( { timeout: 1500 })}><Box className='container' sx={{ display: "flex", flexDirection: "column", width: "100%", margin: "0 auto" }}>
                    <Stack spacing={1}>
                        <h3 style={{ color: "#042E76", padding: "25px 0 0" }}>Raf Ojakh</h3>
                        <p>{t("address")}</p>
                        <p>{t("phone")}</p>
                        <p>{t("mobile")}</p>
                        <p>{t("email")}</p>
                    </Stack>
                </Box></Grow>
            </Grid>
            <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...( { timeout: 1500 })}><Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 }, display: { xs: 'none', md: 'block' } }}>
                <div style={{ width: '80%', position: 'relative', display: 'block'}}><AnimatedImages image1={home1} image2={home2} /></div>
            </Grid></Grow>
        </Grid>
    )
}

export default Contact