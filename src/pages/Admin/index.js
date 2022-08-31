import { Grid } from '@mui/material';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import ResponsiveDrawer from './dashboard/AdminDrawer';
import DataTable from './AdminTable';


const AdminMain = () => {
    return (
        <Grid container >
            <Grid item xs={0} md={2}>
                <ResponsiveDrawer />
            </Grid>
            <Grid item md={10} xs={12} sx={{mt: "70px"}} >
                {
                /* <Routes path="admin">
                    <Route path="projects" element={<EnhancedTable />} />
                </Routes> */}
                <DataTable />

            </Grid>
        </Grid>
    )
}

export default AdminMain