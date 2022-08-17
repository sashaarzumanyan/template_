import { DataGrid } from '@mui/x-data-grid';

const columns = [
    
    { field: 'name', headerName: 'Jobs', width: 70 },
    { field: 'description', headerName: 'First name', width: 130 },
    { field: 'jobTime', headerName: 'Last name', width: 130 },
    { field: 'jobTime', headerName: 'Last name', width: 130 },
    { field: 'jobTime', headerName: 'Last name', width: 130 },
  ];

export default function DataTable({rows}) {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.name}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }