import {useEffect} from "react";
import {getOne, getAll, store} from '../services/leaderboard/leaderboardApi';
import {useDispatch, useSelector} from 'react-redux';
import {setAllLeaders, setLoader, setViewLeader} from '../features/leaderboard/leaderboardSlice';
import {RootState} from '../state/store';
import SpinnerLoader from "../components/atomic/Loader/SpinnerLoader";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";
import {LeaderDBType} from "../types/main";
import {useAppDispatch, useAppSelector} from "../state/hook";
import {LeaderDataType} from "../components/organism/forms/Leader/AddLeaderForm";
import {FormikHelpers} from "formik";

const Dashboard = () => {

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.leaderboard.isLoading);
    const allLeaders = useAppSelector(state => state.leaderboard.allLeaders);

    useEffect(() => {
        fetchLeaders();
    }, []);

    const viewLeader = (id: number) => {
        dispatch(setLoader(true));
        getOne(id).then(leader => {
            dispatch(setViewLeader({viewLeader: leader, isLoading: false}));
            dispatch(setLoader(false));
        }).catch((error) => {
                dispatch(setLoader(false));
            }
        );
    }

    const fetchLeaders = () => {
        dispatch(setLoader(true));
        getAll().then(leaders => {
            dispatch(setAllLeaders({allLeaders: leaders, isLoading: false}));
            dispatch(setLoader(false));
        }).catch((error) => {
                dispatch(setLoader(false));
            }
        );
    }

    const createLeader = (leaderData: LeaderDataType) => {
        dispatch(setLoader(true));
        store(leaderData).then(leaders => {
            dispatch(setAllLeaders({allLeaders: leaders, isLoading: false}));
            dispatch(setLoader(false));
            fetchLeaders();
        }).catch((error) => {
                dispatch(setLoader(false));
            }
        );
    }

    const handleAction = (id: number, context: string) => {
        console.log(id, context);
        switch (context) {
            case 'delete_leader':
                console.log("inside delete leader");
                fetchLeaders();
                break;
            case 'increase_leader_score':
                fetchLeaders();
                break;
            case 'decrease_leader_score':
                fetchLeaders();
                break;
        }
    };

    const handleCreateLeader = (values: LeaderDataType, props:FormikHelpers<LeaderDataType>) => {
        createLeader(values);
        props.resetForm();
    };

    console.log("use selector in Dashboard => ", isLoading, allLeaders, allLeaders.length);

    return <>
        {isLoading && <SpinnerLoader/>}
        <h1>Dashboard: # of All Leaders: {allLeaders.length}</h1>
        <LeaderboardTemplate allLeaders={allLeaders} handleAction={handleAction} isLoading={isLoading} handleCreateLeader={handleCreateLeader}/>
    </>;
};

export default Dashboard;
