import { Grid, Typography, Grow } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import TechnicalCard from '../../components/technicalCard'
// import { procurement } from '../../_mock/procurement'
import image1 from "../../assets/Technical image.jpg";
import image2 from "../../assets/image2.jpg";
import axios from 'axios'

const Procurement = () => {
    const [procurement, getProcurement] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/procurement`)
            .then(res => getProcurement(res.data))
    }, [])

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
                    {procurement.map(({ title, img }, i) => {
                        return (
                            <Grid item xs={10} md={5} >
                                <TechnicalCard title={title} resource={'Procurements'} img={i%2 === 0 ? image1 : image2} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Grid>

    )
}

export default Procurement