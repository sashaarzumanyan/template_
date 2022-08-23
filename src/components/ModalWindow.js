import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Stack style={{ height: "350px" }}sx={style} spacing={2}>
                        <Typography textAlign='center' >Apply </Typography>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                        <Button fullWidth color="success" variant='outlined' onClick={handleClose} >Send</Button>
                    </Stack>
                </>
            </Modal>
        </div>
    );
}
