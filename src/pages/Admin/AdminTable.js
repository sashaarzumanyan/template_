import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button } from '@mui/material';
import AdminModal from './AdminModal';



export default function DataTable({ fields, rows, handleNavigate }) {
  console.log("DataTable render");


  const path = window.location.pathname;

  return (
    <div style={{ height: 372, margin: "0 auto" }}>
      {/* <Button href={path + "/new"} variant='contained' color="success" sx={{ margin: "10px 0" }}>Create New</Button> */}
      <DataGrid
        rows={rows}
        columns={fields}
        pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        getRowId={(row) => row.id ? row.id : row.title }
      // components={{
      //   Footer: <Button>Add</Button>,
      // }}
      // componentsProps={{
      //   footer: { status },
      // }}
      />
      {/* <AdminModal  modalPorps={modalPorps} /> */}
    </div>
  );
}
