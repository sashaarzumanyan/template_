import { Button } from '@mui/material'
import React from 'react'

const TableFields = (fields, handleClick) => {
  return (
    [
        ...fields,
        {
            headerName: "Edit",
            width: 150,
            renderCell: (params) => {
                return <Button onClick={() => handleClick(params)} sx={{ m:0}}fullWidth variant="contained" color="warning">Edit</Button>
            }
        }
    ]
  )
}

export default TableFields