import Table from '../../components/Table'
import React, { useState } from 'react'
import { jobs } from '../../_mock/jobsConfig'
import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import JobCard from '../../components/JobCard'
import BasicModal from '../../components/ModalWindow'

const Jobs = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <div>
            <h1 style={{
                textAlign: "start",
                width: "50%",
                fontSize: "52px",
                color: "#042E76",
                fontWeight: "400",
                margin: "0 0 5% 4%"
            }}>
                Jobs
            </h1>

            <Box sx={{ margin: "0 0 5% 4%" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="text.primary">Jobs</Typography>
                    <Typography color="text.primary">Current Jobs</Typography>
                </Breadcrumbs>
            </Box>

            <Box sx={{ width: "90%", margin: "0 auto" }}>

                <Grid container spacing={4} >
                    {jobs.map(({ name, description, location, jobTime }, index) => {
                        return (
                            <Grid item xs={12} md={4} >
                                <JobCard name={name} description={description} location={location} jobTime={jobTime} setOpen={setOpen} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
           <BasicModal open={isOpen} handleClose={handleClose} />
        </div>
    )
}

export default Jobs