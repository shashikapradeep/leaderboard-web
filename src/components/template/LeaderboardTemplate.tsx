import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material';
import Leaderboard from '../organism/leaderboard/Leaderboard';
import {LeaderDBType} from "../../types/main";

const StackItem = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// @ts-ignore
export default function LeaderboardTemplate({allLeaders, handleAction, isLoading}) {
    console.log("All Leaders in Template => ", allLeaders);
    return (
        <Stack>
            <StackItem>
                <Leaderboard allLeaders={allLeaders} handleAction={handleAction} isLoading={isLoading}/>
            </StackItem>
        </Stack>
    );
}
