import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TechnicalCard from '../../components/TechnicalCard'
import { technicalCards } from '../../_mock/technicalInfoCard'

const Technical_Page = () => {

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
                EXPLORE OUR TECHNICAL ASSISTANCE ACTIVITES
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
                    {technicalCards.map(({ title, img }) => {
                        return (
                            <Grid item xs={10} md={6}>
                                <TechnicalCard title={title} img={img} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>

    )
}

export default Technical_Page