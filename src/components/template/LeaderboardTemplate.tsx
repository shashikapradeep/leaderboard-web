import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material';
import Leaderboard from '../organism/Leaderboard';

const StackItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function LeaderboardTemplate() {
    return (
        <Stack>
            <StackItem>
                <Leaderboard/>
            </StackItem>
        </Stack>
);
}
