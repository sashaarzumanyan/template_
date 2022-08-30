import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Button, Divider, Grow, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import BasicModal from '../../components/ModalWindow';


const SingleJob = ({ jobId }) => {
    const navigate = useNavigate();
    const [selectedJob, setJob] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        axios.get(`http://localhost:3001/jobs?id=${jobId}`)
          .then(res => setJob(...res.data))
      }, [jobId])


    return (
        <div style={{ margin: "4% 4%" }}>
            <Typography variant='h3' sx={{ color: "#042E76", marginBottom: "30px" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>{selectedJob?.name}</div></Grow>
            </Typography>
            <Divider textAlign="center" sx={{ width: "100%" }}>
                <Stack direction="row" spacing={8}>
                    <Typography variant='p' >
                        <BookmarkIcon color='secondary' />
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>{selectedJob?.jobTime}</div></Grow>
                    </Typography>
                    <Typography variant='p' >
                        <BookmarkIcon color='secondary' />
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1500 })}><div>{selectedJob?.location}</div></Grow>
                    </Typography>
                </Stack>
            </Divider>
            <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...({ timeout: 1500 })}>
                <Stack spacing={4}>
                    <Typography variant='h6' color="text.secondary">Description</Typography>
                    <Typography variant='p' >
                        {selectedJob?.description}
                    </Typography>
                    <Box>
                        <Typography variant='h6' color="text.secondary">Required qualifications</Typography>
                        <List dense={true}>
                            {selectedJob?.requirements?.map((elem, index) => {
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
                    <Divider textAlign='center'><Button onClick={() => setOpen(true)} color='secondary' variant='outlined'>Apply</Button></Divider>

                </Stack>
            </Grow>
            <BasicModal open={isOpen} handleClose={handleClose} />
        </div>

    )
}

export default SingleJob