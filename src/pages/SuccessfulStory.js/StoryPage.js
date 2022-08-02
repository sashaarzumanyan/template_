import React from 'react';
import { Box, Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { storyCardInfo } from '../../_mock/homeCardInfo'
import HomeCard from '../../components/HomeCard';
import { useTranslation } from "react-i18next";
import CircleIcon from '@mui/icons-material/Circle';


const StoryPage = () => {
    const { t } = useTranslation()
    const partnersList = t("partners_list", { returnObjects: true })
    return (
        <div>
            <Box sx={{ ml: 6 }}>
                <Typography variant='h2' sx={{ color: "#042E76", margin: "25px 0" }}>Our Partners</Typography>
                <Typography>{t("Our_partners")}</Typography>
            </Box>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Grid container spacing={2} sx={{ margin: "50px 0", width: "95%" }}>
                    {partnersList.map((e, i) => {
                        return (
                            <Grid item md={4} >
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <CircleIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={e} />
                                </ListItem>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <div className='cardDiv'>
                <Grid container spacing={2} sx={{}}>
                    {storyCardInfo.map(({ title, image }) => {
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

export default StoryPage