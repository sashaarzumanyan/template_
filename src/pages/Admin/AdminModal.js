import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import TableFields from '../../hook/TableFields';

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

export default function AdminModal({ open, handleClose, fields }) {
    // const textField = () => {
    //     // debugger
    //     for (const field in fields) {
    //         return <TextField id={field.title} label="Full Name" variant="outlined" />
    //     }
    // }
    const fieldsLabel = fields ? Object.keys(fields) : []
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Stack style={{ height: "350px" }} sx={style} spacing={2}>
                        {fieldsLabel?.map((field, index) => <TextField id={field.title} label="Full Name" variant="outlined" />)}
                        <Button fullWidth color="success" variant='outlined' onClick={handleClose} >Send</Button>
                    </Stack>
                </>
            </Modal>
        </div>
    );
}
