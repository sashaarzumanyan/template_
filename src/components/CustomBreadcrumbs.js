import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



function CustomBreadcrumbs({ path }) {
    const navigate = useNavigate();

    // function handleClick( path) {
    //     navigate(path);
    // }
    return (
        <div role="presentation" >
            <Breadcrumbs aria-label="breadcrumb">
                {path.map((elem, index) => (
                    <Link underline="hover" color="inherit" key={index}  >
                         <Typography key={index} color={path.length - 1 === index ? "text.primary" : 'inherit'}>{elem.title}</Typography>
                    </Link>
                ))}
            </Breadcrumbs>
        </div>
    );
}

export default React.memo(CustomBreadcrumbs)