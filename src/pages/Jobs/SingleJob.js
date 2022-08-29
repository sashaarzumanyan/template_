import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Button, Divider, Grow, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const SingleJob = ({ job, checkJob }) => {
    const navigate = useNavigate();

    // useEffect(() => {        
    //     checkJob()
    // }, [])


    return (
        <div style={{ margin: "4% 4%" }}>
            <Typography variant='h3' sx={{ color: "#042E76", marginBottom: "30px" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>{job?.name}</div></Grow>
            </Typography>
            <Divider textAlign="center" sx={{ width: "100%" }}>
                <Stack direction="row" spacing={8}>
                    <Typography variant='p' >
                        <BookmarkIcon color='secondary' />
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>{job?.jobTime}</div></Grow>
                    </Typography>
                    <Typography variant='p' >
                        <BookmarkIcon color='secondary' />
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>{job?.location}</div></Grow>
                    </Typography>
                </Stack>
            </Divider>
            <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}>
                <Stack spacing={4}>
                    <Typography variant='h6' color="text.secondary">Description</Typography>
                    <Typography variant='p' >
                        {job?.description}
                    </Typography>
                    <Box>
                        <Typography variant='h6' color="text.secondary">Required qualifications</Typography>
                        <List dense={true}>
                            {job?.requirements?.map((elem, index) => {
                                return (
                                    <ListItem>
                                        <ListItemText
                                            primary={elem}
                                        // secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Divider textAlign='center'><Button onClick={() => navigate("careers")} color='secondary' variant='outlined'>Apply</Button></Divider>

                </Stack>
            </Grow>
        </div>

    )
}

export default SingleJob