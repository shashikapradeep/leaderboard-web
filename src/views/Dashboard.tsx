import {useEffect} from "react";
import {getOne, getAll} from '../services/leaderboard/leaderboardApi';
import {useDispatch, useSelector} from 'react-redux';
import {setAllLeaders, setLoader, setViewLeader} from '../features/leaderboard/leaderboardSlice';
import {RootState} from '../state/store';
import SpinnerLoader from "../components/atomic/Loader/SpinnerLoader";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";
import {LeaderDBType} from "../types/main";
import {useAppDispatch, useAppSelector} from "../state/hook";

const Dashboard = () => {

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.leaderboard.isLoading);
    const allLeaders = useAppSelector(state => state.leaderboard.allLeaders);

    useEffect(() => {
        dispatch(setLoader(true));
        getAll().then(leaders => {
            console.log("All Leaders in View useEffect => ", leaders);
            dispatch(setAllLeaders({allLeaders: leaders, isLoading: false}));
        });
    }, []);

    const viewLeader = (id: number) => {
        dispatch(setLoader(true));
        getOne(id).then(leader => {
            dispatch(setViewLeader({viewLeader: leader, isLoading: false}));
        });
    }

    console.log("use selector in Dashboard => ", isLoading, allLeaders, allLeaders.length);

    return <>
        {isLoading && <SpinnerLoader/>}
        <h1>Dashboard: # of All Leaders: {allLeaders.length}</h1>
        <LeaderboardTemplate allLeaders={allLeaders}/>
    </>;
};

export default Dashboard;
