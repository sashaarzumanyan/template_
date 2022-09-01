import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Alert } from '@mui/material';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 100},
//   { field: 'firstName', headerName: 'First name', width: 150},
//   { field: 'lastName', headerName: 'Last name', width: 150},
//   { field: 'age', headerName: 'Age', type: "number",  width: 100, },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     width: 170,
//     sortable: false,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35 },
//   { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42 },
//   { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45 },
//   { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16 },
//   { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 27 },
//   { id: 6, firstName: "Lentrush", lastName: 'Melisandre', age: 50 },
//   { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44 },
//   { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36 },
//   { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65 },
// ];

export default function DataTable({ fields, rows }) {
  
  return (
    <div style={{ height: 372, width: "76%", margin: "0 auto" }}>
      <DataGrid
        rows={rows}
        columns={fields}
        pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        getRowId={(row) => row.title ? row.title : row.id}
      />
    </div>
  );
}
