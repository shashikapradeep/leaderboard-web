import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {Modal, styled} from '@mui/material';
import Leaderboard from '../organism/leaderboard/Leaderboard';
import {LeaderDBType} from "../../types/main";
import Button from '../../components/atomic/CustomButton/CustomButton';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import AddLeaderForm from "../organism/forms/Leader/AddLeaderForm";

const StackItem = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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

// @ts-ignore
export default function LeaderboardTemplate({allLeaders, handleAction, handleCreateLeader, isLoading}) {

    const [open, setOpen] = useState(false);

    const handleCreateLeaderModalClose = () => setOpen(false);
    const handleCreateLeaderModalOpen = () => setOpen(true);
    const CreateLeaderModal = () => {
        return <Modal
            open={open}
            onClose={handleCreateLeaderModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AddLeaderForm onSubmitHandler={handleCreateLeader}/>
            </Box>
        </Modal>
    };
    return (
        <Stack>
            <StackItem>
                <Button label="Add User" onClick={handleCreateLeaderModalOpen}/>
                <CreateLeaderModal/>
            </StackItem>
            <StackItem>
                <Leaderboard allLeaders={allLeaders} handleAction={handleAction}/>
            </StackItem>
        </Stack>
    );
}
