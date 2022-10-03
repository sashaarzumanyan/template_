import { Divider, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';
import TableFields from '../../hook/TableFields';
import usePathArray from '../../hook/usePathArray';
import AdminModal from './AdminModal';
import Dashboard from './Dashboard';
import ResponsiveDrawer from './sidebar/AdminDrawer';
import { sidebarConf } from './sidebar/sidebarConfigs';


const AdminMain = () => {
    const [isActive, setActive] = useState('project');
    const [data, setData] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [EditRowPorps, setEditRowPorps] = useState();
    const addBtn = useRef();
    const navigate = useNavigate();
    const path = window.location.pathname;

    const breadcrumbProps = usePathArray(path)
    console.log("breadcrumbTitels", EditRowPorps);


    useEffect(() => {
        axios.get(`http://localhost:5000/api/project`)
            .then(res => setData(res.data.rows))
        // debugger
    }, [isActive])
    console.log(data);
    const handleClick = (params) => {
        console.log("params", params);
        // debugger
        setEditRowPorps(params.row);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        return () => {
            addBtn.current = undefined
        }
    }, [path])

    // const handleNavigate = () => {
    //     navigate(`${path}/new`)
    //     console.log(addBtn);
    // }

    return (
        <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
                <ResponsiveDrawer setActive={setActive} />
            </Grid>
            <Grid item xs={12} md={8} sx={{ mt: "70px" }} >
                <div style={{ margin: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <CustomBreadcrumbs path={breadcrumbProps} />
                    <Divider />
                    {/* <Button onClick={handleNavigate} ref={addBtn} variant='contained' color="success" sx={{ mr: 2 }}>Add</Button> */}
                </div>
                <Routes >
                    <>
                        {sidebarConf.map((e, i) => {
                            // debugger
                            return (
                                <Route
                                    key={i}
                                    path={e.path}
                                    element={
                                        <Dashboard
                                            fields={TableFields(e.tableField, handleClick)}
                                            rows={data}
                                            EditRowPorps={EditRowPorps}
                                        />
                                    }
                                />
                            )
                        })}
                    </>
                </Routes>
                {/* <AdminModal open={isOpen} handleClose={handleClose} fields={modalPorps} /> */}
            </Grid>
        </Grid>
    )
}

export default AdminMain