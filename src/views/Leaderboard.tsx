import {useEffect} from "react";
import {getAll} from '../services/leaderboard/leaderboardApi';

const Leaderboard = () => {
    useEffect(() => {
        getAll().then(leaders => {
            console.log("leaders => ", leaders);
        });
    }, []);

    return <h1>Leaderboard</h1>;
};

export default Leaderboard;
