import { Stack } from '@mui/material'
import React from 'react'

const AdminModal = () => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack>
                    <Tex
                </Stack>
            </Box>
        </Modal>
    )
}

export default AdminModal