import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {storyCardInfo} from '../../_mock/homeCardInfo'
import HomeCard from '../../components/HomeCard';


const StoryPage = () => {
    return (
        <div>
            <Box sx={{ ml: 6 }}>
                <Typography variant='h2' sx={{ color: "#042E76", margin: "25px 0" }}>SUCCESSFUL STORIES</Typography>
                <p class="p1">There are projects that become stories.<span class="Apple-converted-space"><br />
                </span>Some stories are more successful than others.<br />
                    In this section, we propose a selection of success stories from the activities of AGT International.</p>
            </Box>
            <div className='cardDiv'>
                <Grid container spacing={2} sx={{}}>
                    {storyCardInfo.map(({ title, image }) => {
                        return (
                            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                                <HomeCard title={title} image={image} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default StoryPage