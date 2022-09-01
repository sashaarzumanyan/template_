import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import ResponsiveDrawer from './dashboard/AdminDrawer';
import DataTable from './AdminTable';
import { sidebarConf } from './dashboard/sidebarConfigs'
import axios from 'axios';
import TableFields from '../../hook/TableFields';
import BasicModal from '../../components/ModalWindow';


const AdminMain = () => {
    const [isActive, setActive] = useState();
    const [data, setData] = useState([]);
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:3001/${isActive}`)
        .then(res => setData(res.data))
    }, [isActive])
    console.log(data);
    const handleClick = (params) => {
        console.log("params", params);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <Grid container >
            <Grid item xs={0} md={2}>
                <ResponsiveDrawer setActive={setActive} />
            </Grid>
            <Grid item md={10} xs={12} sx={{ mt: "70px" }} >
                {
                /* <Routes path="admin">
                    <Route path="projects" element={<EnhancedTable />} />
                </Routes> */}
                {/* <DataTable /> */}
                <Routes >
                    {sidebarConf.map((e, i) => {
                        // debugger
                        return (
                            <Route key={i} path={e.path} element={<DataTable fields={TableFields(e.tableField, handleClick)} rows={data} />} />
                        )
                    })}
                </Routes>
                <BasicModal open={isOpen} handleClose={handleClose}  />

            </Grid>
        </Grid>
    )
}

export default AdminMain