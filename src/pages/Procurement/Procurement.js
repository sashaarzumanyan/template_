import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TechnicalCard from '../../components/technicalCard'
import { procurement } from '../../_mock/procurement'

const Procurement = () => {

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
                EXPLORE OUR PROCUREMENT ACTIVITES
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
                    {procurement.map(({ title, img }) => {
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

export default Procurement