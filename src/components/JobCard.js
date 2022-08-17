import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function JobCard({ name, location, description, jobTime, setOpen }) {
    return (
        <Card sx={{ minWidth: 250, boxShadow: 5 }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {location}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {jobTime}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button size="small" variant='contained' onClick={() => setOpen(true)} >Apply</Button>
            </CardActions>
        </Card>
    );
}