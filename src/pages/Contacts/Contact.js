import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';

const Contact = () => {

    const discover = [
        "The Company",
        "Our Mission",
        "Where we work and our main clients",
        "Our Strength",
        "Organisation and staff"
    ]

    return (
        <Grid container>
            <Grid item xs={6}
                sx={{
                    padding: "35px"
                }}
            >
                <Typography
                    variant='h2'
                    sx={{
                        color: "#042E76",
                        marginBottom: "30px",
                    }}
                >
                    MAKE THIS WORLD A BETTER PLACE
                </Typography>

                <Box sx={{ width: "82%" }}>
                    <Typography variant='p'>
                        Established in 1969, <strong>AGT International</strong> (formerly <strong>AGROTEC S.p.A</strong>.) is a leading firm operating at both national and international levels in the fields of agricultural, rural development and environment offering a wide range of services which include technical assistance, and procurement of high-tech instrumentation and machineries.                        </Typography>
                </Box>



                <Box className='container' sx={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Box className='menu'>
                        <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Discover AGT International</h3>
                        {discover.map((e, index) => {
                            return <a>{e}</a>
                        })}
                    </Box>


                    <Box className='menu' sx={{
                        display: "flex",
                        flexDirection: "row",
                        
                    }}>
                        <h3 style={{color: "#042E76", padding: "25px 0 15px 0" }}>Job OpportunitiesJob </h3>
                        <EastIcon sx={{ color: "#042E76", margin: "26px 0 0 26px"}}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={6}></Grid>
        </Grid>
    )
}

export default Contact