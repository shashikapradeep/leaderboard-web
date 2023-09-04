import {useEffect} from "react";
import {getOne} from '../services/leaderboard/leaderboardApi';

const Dashboard = () => {
    useEffect(() => {
        getOne(2).then(leader => {
            console.log("leader => ", leader);
        });
    }, []);

    return <h1>Dashboard</h1>;
};

export default Dashboard;
