import React, { useEffect, useState } from 'react'
// import { jobs } from '../../_mock/jobsConfig'
import { Box, Breadcrumbs, Grid, Link, Typography, Grow } from '@mui/material'
import JobCard from '../../components/JobCard';
import BasicModal from '../../components/ModalWindow';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Jobs = ({handleClick}) => {
    const { t } = useTranslation();
    const [jobs, getJobs] = useState([]);
    

    const teamSpecific = t("team_specific", { returnObjects: true });

    useEffect(() => {
        axios.get(`http://localhost:3001/jobs`)
            .then(res => getJobs(res.data))
    }, [])

    return (
        <div style={{ margin: "4% 4%" }}>
            <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "100px" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>Careers</div></Grow>
            </Typography>
            <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}>
                <Typography variant='p'>
                    {t("Our_team")}
                </Typography>
            </Grow>

            <div style={{ marginBottom: "50px" }}></div>

            <Grow in={true} style={{ transformOrigin: '1 1 1' }} {...({ timeout: 1500 })}>
                <Box className='container' sx={{
                    display: "flex",
                    flexDirection: {
                        md: "column",
                        lg: "row"
                    }
                }}>
                    <Box className='menu'>
                        <h3 style={{ color: "#042E76", padding: "25px 0 15px 0" }}>Our values</h3>
                        {teamSpecific.map((e, index) => {
                            return <a className='li'>{e}</a>
                        })}
                    </Box>
                </Box>
            </Grow>
            <div style={{ marginBottom: "50px" }}></div>
            <Box sx={{ width: "100%", margin: "0 auto" }}>
                <Grid container spacing={4} >
                    {jobs.map(({ name, description, location, jobTime, id }, index) => {
                        return (
                            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><Grid item xs={12}  >
                                <JobCard id={id} name={name} description={description} location={location} jobTime={jobTime} handleClick={handleClick} />
                            </Grid></Grow>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Jobs