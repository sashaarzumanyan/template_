import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TechnicalCard from '../../components/technicalCard'
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
        <>
            <h1 style={{
                textAlign: "start",
                width: "50%",
                fontSize: "52px",
                color: "#042E76",
                fontWeight: "400",
                margin: "0 0 5% 4%"
            }}>
                EXPLORE OUR INDUSTRIES
            </h1>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Grid container spacing={14} sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {ul_list.map((title , index) => {
                        return (
                            <Grid item xs={10} md={6}>
                                <TechnicalCard title={title} img={imagesArray[index]} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Box >
            </Box>
        </>

    )
}

export default Industries
