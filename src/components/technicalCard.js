import { Card, CardMedia, Typography } from '@mui/material'
import { motion } from "framer-motion"
import React from 'react'

const TechnicalCard = ({ title, img }) => {
    return (

        < Card
            sx={{
                position: "relative",
            }}>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <CardMedia sx={{
                    width: "100%"

                }}
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
                    paddingLeft: "30px",

                }}>
                {title}
            </Typography>

        </Card>



    )
}

export default TechnicalCard