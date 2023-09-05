import {Modal, Paper, ModalProps} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const CustomModal = ({open, onClose, children, ...arg}: ModalProps) => {
    const theme = useTheme();

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        {...arg}
    >
        <Paper sx={style}>
            {children}
        </Paper>
    </Modal>
}

export default CustomModal;
