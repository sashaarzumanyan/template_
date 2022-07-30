import { Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const TechnicalCard = ({ title, img }) => {
    return (

        < Card
            sx={{
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "flex-end",
                // alignItems: "center",
                position: "relative",
            }}>

            <CardMedia sx={{
                width: "100%"

            }}
                component="img"
                alt="green iguana"
                image={img}
            />
            <Typography
                variant="h5"
                component="div"
                sx={{
                    width: '100%',
                    position: "absolute",
                    zIndex: 1,
                    bottom: "10%",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",


                }}>
                {title}
            </Typography>

        </Card>



    )
}

export default TechnicalCard