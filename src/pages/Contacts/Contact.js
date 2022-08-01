import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material';
import AnimatedImages from '../../components/AnimatedImage/AnimatedImages';
import { useTranslation } from "react-i18next";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";

const Contact = () => {
    const {t} = useTranslation();
    return (
        <Grid container sx={{height: "100vh"}}>
            <Grid item xs={12} md={3} lg={5} sx={{ padding: "35px" }}>
                <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "30px" }}>
                    CONTACTS
                </Typography>

                <Box sx={{ width: "82%" }}>
                    <Typography variant='p'>
                    We think that together we can afford and solve every challenge. We are eager to find connections between our partners and the society, to better understand the world and shape the future. If you have an idea, a proposal or simply information, don’t hesitate to contact us.
                    </Typography>
                </Box>
                <Box className='container' sx={{ display: "flex", flexDirection: "column" }}>
                    <Stack spacing={1}>
                        <h3 style={{ color: "#042E76", padding: "25px 0 0" }}>Raf Ojakh</h3>
                        <p>{t("address")}</p>
                        <p>{t("phone")}</p>
                        <p>{t("mobile")}</p>
                        <p>{t("email")}</p>
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={12} md={9} lg={7} sx={{ mt: { xs: 4 }, display: { xs: 'none', md: 'block' } }}>
                <AnimatedImages image1={home1} image2={home2} />
            </Grid>
        </Grid>
    )
}

export default Contact