import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmployeePng from '../assets/employee.png'

function EmployeeCard({ fullName, position, email }) {
  return (
    <Card sx={{ width: "300px" }}>
        <CardMedia
          component="img"
          height="250px"
          image={EmployeePng}
          alt="green iguana"
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography gutterBottom variant="h5" component="div" sx={{color: "#042E76"}}>
              {fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {position}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            <LinkedInIcon color='primary'/>
          </Stack>
        </CardContent>
    </Card>
  );
}
export default EmployeeCard
