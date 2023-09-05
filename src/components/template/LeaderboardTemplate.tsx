import Stack from '@mui/material/Stack';
import Leaderboard, {LeaderBoardType} from '../organism/leaderboard/Leaderboard';
import Button from '../../components/atomic/CustomButton/CustomButton';
import {useState} from "react";
import AddLeaderForm from "../organism/forms/Leader/AddLeaderForm";
import CustomModal from "../atomic/Modal/CustomModal";
import Container from "@mui/material/Container";
import {FormikHelpers} from "formik";
import {LeaderDataType} from '../../types/leaderboardTypes';

interface LeaderBoardTemplateType extends LeaderBoardType{
    handleCreateLeader: (values: LeaderDataType, props: FormikHelpers<LeaderDataType>) => void;
    openCreateUserModal?: boolean;
}

export default function LeaderboardTemplate({allLeaders, handleAction, handleCreateLeader, openCreateUserModal}:LeaderBoardTemplateType) {

    const [open, setOpen] = useState<boolean>(openCreateUserModal ?? false);

    const handleCreateLeaderModalClose = () => setOpen(false);
    const handleCreateLeaderModalOpen = () => setOpen(true);

    const CreateLeaderModal = () => {
        return <CustomModal
            open={open}
            onClose={handleCreateLeaderModalClose}
        >
            <Container>
                <AddLeaderForm onSubmitHandler={handleCreateLeader}/>
            </Container>
        </CustomModal>
    };

    return (
        <Stack direction={"column"} gap={3} mx={2}>
            <Stack direction="row" justifyContent="end">
                <Button label="Add User" onClick={handleCreateLeaderModalOpen}/>
            </Stack>
            <Stack>
                <CreateLeaderModal/>
                <Leaderboard allLeaders={allLeaders} handleAction={handleAction}/>
            </Stack>
        </Stack>
    );
}
