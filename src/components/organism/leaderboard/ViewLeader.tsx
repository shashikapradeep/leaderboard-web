import {LeaderDBType} from "../../../types/leaderboardTypes";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import * as React from "react";

type viewLeader = {
    leaderData: LeaderDBType | undefined;
}
const ViewLeader = ({leaderData}: viewLeader) => {
    return <Container>
        <Stack>
            Name: {leaderData?.name}
        </Stack>
        <Stack>
            Age: {leaderData?.age}
        </Stack>
        <Stack>
            Points: {leaderData?.points}
        </Stack>
        <Stack>
            Address: {leaderData?.address}
        </Stack>
    </Container>
};

export default  ViewLeader;
