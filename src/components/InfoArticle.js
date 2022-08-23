import { Box, Grid, Typography, Grow } from '@mui/material';
import React from 'react';

const InfoArticle = ({ image, text, title, index }) => {
    const isReverse = Boolean(index % 2)
    return (
        <Grid container sx={{ flexDirection: !isReverse ? "row" : "row-reverse", backgroundColor: isReverse? "aliceblue" : null }}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Grid item md={12} lg={6} sx={{display: "flex" , alignItems: "center"}}>
                <img src={image} alt='culture' style={{ width: "100%",  height: index === 0 ? "100%" : "80%" }} />
            </Grid></Grow>
            <Grid item md={12} lg={6} sx={{m: "auto"}}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><Box sx={{ height: "100%", width: "70%", ml: 3, margin: "20px 0 20px 25px" }}>
                    <Typography variant='h4' sx={{ mb: "20px", color: "#042E76" }}>{title}</Typography>
                    {text}
                </Box></Grow>
            </Grid>
        </Grid>
    )
}

export default InfoArticle