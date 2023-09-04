import {useEffect} from "react";
import {getOne, getAll} from '../services/leaderboard/leaderboardApi';
import {useDispatch, useSelector} from 'react-redux';
import {setAllLeaders, setLoader, setViewLeader} from '../features/leaderboard/leaderboardSlice';
import {RootState} from '../state/store';
import SpinnerLoader from "../components/atomic/Loader/SpinnerLoader";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";

const Dashboard = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector<RootState>(state => state.leaderboard.isLoading);
    const allLeaders = useSelector<RootState>(state => state.leaderboard.allLeaders);

    useEffect(() => {
        dispatch(setLoader(true));
        getAll().then(leaders => {
            dispatch(setAllLeaders({allLeaders: leaders, isLoading: false}));
        });
    }, []);

    const viewLeader = (id: number) => {
        dispatch(setLoader(true));
        getOne(id).then(leader => {
            dispatch(setViewLeader({viewLeader: leader, isLoading: false}));
        });
    }

    return <>
        {isLoading && <SpinnerLoader/>}
        <h1>Dashboard</h1>
        <LeaderboardTemplate allLeaders={allLeaders}/>
    </>;
};

export default Dashboard;
