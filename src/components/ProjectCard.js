import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { motion } from "framer-motion"


const ProjectCard = ({ newsCard = false, title, text, image, dateInfo, cardStyle }) => {
    return (
        <Box sx={{
            width: "400px",
            border: "none",
            display: "flex",
            justifyContent: "cemter",
            alignItems: "center",
            position: "relative",
            flexWrap: ""
        }}>
            <Card sx={{
                boxShadow: 0
            }}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    {cardStyle === "list" ? null:
                        <CardMedia
                            component="img"
                            height="220"
                            image={image}
                            alt={title}
                            sx={{
                                width: "100%"
                            }}
                        /> 
                    }
                </motion.div>

                {!newsCard ? <Box sx={{
                    backgroundColor: "#042E76",
                    width: "38px",
                    height: "120px",
                    position: "absolute",
                    zIndex: 3,
                    left: "10px",
                    top: "160px"
                }}>

                </Box> : null}
                <CardContent sx={{
                    marginLeft: "20px"
                }}>
                    <Box sx={{
                        margin: "0 0 20px 60px"

                    }}>
                        {!newsCard ? <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                fontWeight: 700,
                                fontSize: "14px",
                                color: "#042E76"
                            }}
                        >
                            {title}
                        </Typography> : null}

                        <Typography sx={{
                            fontSize: "14px",
                            color: "#003DA5"
                        }}>
                            {dateInfo}
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{
                        color: "black",
                        fontSize: "17px"
                    }}>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProjectCard
