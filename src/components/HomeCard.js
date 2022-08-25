import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { setPageProps } from '../redux/actions/setPageInfo'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeCard = ({ image, title, resource }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setPageProps({ pageTitle: title, image1: image, resource }))
        navigate(`/${resource}`)
    }
    return (
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: { md: "100%", xs: "100%" } }} onClick={handleClick}>
                <CardActionArea sx={{}}>
                    <CardMedia
                        component="img"
                        height="470"
                        image={image}
                        alt={title}
                    />
                </CardActionArea>
            </Card>
            <div
                style={{
                    position: "absolute",
                    top: "420px",
                    backgroundColor: "white",
                    height: "90px",
                    width: "85%",
                    borderBottom: "10px solid blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Typography textAlign="center" variant="h5" component="div">
                    {title}
                </Typography>
            </div>
        </div>
    )
}

export default HomeCard