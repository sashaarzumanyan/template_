import { Button } from '@mui/material'
import React, { memo } from 'react'
import { convertDate } from './convertDate'

const TableFields = (fields, handleClick) => {
  return (
    [
      ...fields,
      // {
      //   headerName: "Title2",
      //   width: "150",
      //   renderCell: (params) => params.row.title
      //   },
      {
        field: 'createdAt',
        headerName: "Date",
        width: "150",
        renderCell: (params) => convertDate(params.row.createdAt)
      },
      {
        field: 'action',
        headerName: "Action",
        width: "140",
        renderCell: (params) => {
          return <Button onClick={() => handleClick(params)} sx={{ m: 0 }} fullWidth variant="contained" color="warning">Edit</Button>
        }
      }
    ]
  )
}

export default TableFields