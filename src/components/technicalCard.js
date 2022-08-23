import { Card, CardMedia, Typography, Grow } from '@mui/material'
import { motion } from "framer-motion"
import React from 'react'
import { setPageProps } from '../redux/actions/setPageInfo'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TechnicalCard = ({ title, resource, img, section }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        dispatch(setPageProps({
            image1:img,
            image2: img,
            section,
            resource,
        }))
        navigate(`/details`)
    }
    return (

        <Card sx={{ position: "relative", }} onClick={handleClick}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <CardMedia sx={{ width: "100%", height: "400px" }}
                    component="img"
                    alt="green iguana"
                    image={img}
                />
            </motion.div>
            <Typography
                variant="h5"
                component="div"
                sx={{
                    width: '70%',
                    position: "absolute",
                    zIndex: 1,
                    bottom: "10%",
                    color: "white",
                    textAlign: "start",
                    fontWeight: "600",
                    paddingLeft: "10%",
                }}>
                {title}
            </Typography>
        </Card>



    )
}

export default TechnicalCard