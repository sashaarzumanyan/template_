import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const ProjectCard = ({ title, text, image, dateInfo }) => {
    return (
        <Box sx={{ 
            width: "100%", 
            border: "none", 
            display: "flex",
            justifyContent: "cemter",
            alignItems: "center",
            position: "relative"
         }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={image}
                    alt={title}
                    sx={{

                    }}
                />

                <Box sx={{
                    backgroundColor: "#042E76",
                    width: "38px",
                    height: "120px",
                    position: "absolute",
                    zIndex: 3,
                    left: "10px",
                    top: "160px"
                }}>

                </Box>
                <CardContent sx={{
                    marginLeft: "20px"
                }}>
                    <Box sx={{
                        margin: "0 0 20px 60px"

                    }}>
                        <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                fontWeight: 700,
                                fontSize: "14px",
                                color: "#042E76"
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px",
                        }}>
                            {dateInfo}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        <b>{text}</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Box>
    );
}

export default ProjectCard
