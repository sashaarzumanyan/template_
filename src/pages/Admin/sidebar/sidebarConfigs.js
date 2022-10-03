import CategoryIcon from '@mui/icons-material/Category';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import { Button } from '@mui/material';
import { useDate } from '../../../hook/convertDate'
// import Done from "@material-ui/icons/Done";


export const sidebarConf = [
    {
        title: 'Projects',
        icon: <CategoryIcon />,
        path: 'project',
        tableField: [
            // { field: 'internalId', headerName: 'ID', width: 100 },
            { field: 'id', headerName: 'ID', width: 150 },
            { field: 'title', headerName: 'Title', width: 150 },
            { field: 'category', headerName: 'Category', width: 100 },
            // { field: 'createdAt', headerName: 'Date', width: 200 },
            // {
            //     headerName: "Edit",
            //     // field: "title",
            //     width: 150,
            //     renderCell: () => {
            //         return <Button sx={{ m:0}}fullWidth variant="contained" color="warning">Edit</Button>
            //     }
            // }
        ]
    },
    {
        title: 'News',
        icon: <NewspaperIcon />,
        path: 'news',
        tableField: [
            { field: 'title', headerName: 'Title', width: 100 },
            { field: 'category', headerName: 'Category', width: 150 },
            { field: 'dateInfo', headerName: 'Date', width: 150 },
        ]
    },
    {
        title: 'jobs',
        icon: <WorkIcon />,
        path: 'jobs',
        tableField: [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'name', headerName: 'Name', width: 150 },
            { field: 'location', headerName: 'Location', width: 150 },
            { field: 'jobTime', headerName: 'jobTime', width: 100, },
        ]
    },
]