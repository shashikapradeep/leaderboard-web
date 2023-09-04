import {Modal, Box, ModalProps} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CustomModal = ({open, onClose, children, ...arg}: ModalProps) => <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    {...arg}
>
    <Box sx={style}>
        {children}
    </Box>
</Modal>

export default CustomModal;
