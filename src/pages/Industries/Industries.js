import { Grid, Typography, Grow } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TechnicalCard from '../../components/TechnicalCard'
import { procurement } from '../../_mock/procurement'
import { useTranslation } from "react-i18next";
import TenderPic from '../../assets/Tender-Participation.jpg'
import cargo from '../../assets/cargo.jpg'
import barrel from '../../assets/barrel.jpg'
import tenderPic from '../../assets/Tender-Participation.jpg'

const Industries = () => {
    const { t } = useTranslation();

    const ul_list = t("Industries", { returnObjects: true });
    const imagesArray = [tenderPic, barrel, cargo, barrel ]

    return (
         <Grid item xs={12} md={5} lg={4} sx={{ padding: "4% 4% 10%" }}>
            <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "100px" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><div>EXPLORE OUR INDUSTRIES</div></Grow>
            </Typography>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
            }}>
                <Grid container spacing={14} sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {ul_list.map((industry , index) => {
                        return (
                            <Grid item xs={10} md={6}>
                                <TechnicalCard
                                    title={industry.title}
                                    // paragraph={industry.content}
                                    img={imagesArray[index]}
                                    section={industry.section}
                                    resource={'Industries'}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Box >
            </Box>
        </Grid>

    )
}

export default Industries
