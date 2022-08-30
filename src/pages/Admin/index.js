import { Grid } from '@mui/material';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import EnhancedTable from './AdminTable';


const AdminMain = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
                {
                /* <Routes path="admin">
                    <Route path="projects" element={<EnhancedTable />} />
                </Routes> */}
                <EnhancedTable />
            </Grid>
        </Grid>
    )
}

export default AdminMain