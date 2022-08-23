import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const MegaMenu = ({handlePopoverOpen, handlePopoverClose, anchorEl, open }) => {

    return (
        <div>

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                onMouseLeave={handlePopoverClose}
                // disableRestoreFocus
                // disableAutoFocus={true}
                // disableEnforceFocus={true}

                
            >
                <Typography onClick={(event)=>console.log(event)} sx={{ p: 1 }}>I use Popover.</Typography>
            </Popover>
        </div>
    );
}

export default MegaMenu
