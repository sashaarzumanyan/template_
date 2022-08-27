import { Grid, Typography, Grow } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TechnicalCard from '../../components/technicalCard'
import { procurement } from '../../_mock/procurement'

const Procurement = () => {

    return (
        <Grid item xs={10} md={5} lg={4}>
            <Box sx={{padding: "4% 4% 0%" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}>
                    <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "100px", fontSize: {xs:"1.75rem", sm: "3.75rem"}}}>
                        EXPLORE OUR PROCUREMENT ACTIVITES
                    </Typography></Grow>
            </Box>
            <Box >

                <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {procurement.map(({ title, img }) => {
                        return (
                            <Grid item xs={10} md={5} >
                                <TechnicalCard title={title} resource={'Procurements'} img={img} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Grid>

    )
}

export default Procurement