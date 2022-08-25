import { Grid, Typography, Grow } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TechnicalCard from '../../components/technicalCard'
import { procurement } from '../../_mock/procurement'

const Procurement = () => {

    return (
        <Grid item xs={12} md={5} lg={4}>
            <Typography
                variant='h2'
                sx={{ color: "#042E76", marginBottom: "100px", }}
            >  <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>EXPLORE OUR PROCUREMENT ACTIVITES</div></Grow>
            </Typography>
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