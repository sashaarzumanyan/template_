import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function JobCard({ name, location, handleClick, jobTime, id }) {
    const date = "08:28:2022"
    return (
        <Card sx={{ minWidth: 250, boxShadow: 0, border: "1px solid #042E76" }}>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Box sx={{ textAlign: "center", padding: "10px" }}>
                    <Typography sx={{ mb: 1 }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {jobTime}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center", padding: "10px" }}>
                    <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                        <LocationOnIcon color="secondary" />
                        {location}
                    </Typography>
                    <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                        <CalendarMonthIcon color="success" />
                        {date}
                    </Typography>
                </Box>
                <CardActions sx={{ pr: "20px" }}>
                    <Button size="small" variant='outlined' sx={{ borderColor: "#042E76", color: "#042E76" }} onClick={() => handleClick(id)}>View More</Button>
                </CardActions>
            </Stack>
        </Card>
    );
}