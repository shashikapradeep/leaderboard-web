import {useEffect, useState} from "react";
import {getOne, getAll, store, remove, updateScore} from '../services/leaderboard/leaderboardApi';
import {setAllLeaders, setLoader, setViewLeader} from '../features/leaderboard/leaderboardSlice';
import SpinnerLoader from "../components/atomic/Loader/SpinnerLoader";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";
import {useAppDispatch, useAppSelector} from "../state/hook";
import {LeaderDataType} from "../components/organism/forms/Leader/AddLeaderForm";
import {FormikHelpers} from "formik";

const Leaderboard = () => {

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.leaderboard.isLoading);
    const allLeaders = useAppSelector(state => state.leaderboard.allLeaders);

    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

    useEffect(() => {
        fetchLeaders();
    }, []);

    const fetchLeader = (id: number) => {
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
            dispatch(setLoader(false));
            fetchLeaders();
        }).catch((error) => {
                dispatch(setLoader(false));
            }
        );
    }

    const deleteLeader = (id: number) => {
        dispatch(setLoader(true));
        remove(id).then(leaders => {
            dispatch(setLoader(false));
            fetchLeaders();
        }).catch((error) => {
                dispatch(setLoader(false));
            }
        );
    }

    const updateLeaderScore = (id: number, context: string) => {
        dispatch(setLoader(true));
        updateScore(id, context).then(leaders => {
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
                deleteLeader(id);
                break;
            case 'increase_leader_score':
            case 'decrease_leader_score':
                updateLeaderScore(id, context);
                break;
            case 'view_leader':
                fetchLeader(id);
                break;
        }
    };

    const handleCreateLeader = (values: LeaderDataType, props: FormikHelpers<LeaderDataType>) => {
        createLeader(values);
        props.resetForm();
        setOpenCreateModal(false);
    };

    return <>
        {isLoading && <SpinnerLoader open={isLoading}/>}
        <h1>Dashboard</h1>
        <LeaderboardTemplate allLeaders={allLeaders} handleAction={handleAction}
                             handleCreateLeader={handleCreateLeader} openCreateUserModal={openCreateModal}/>
    </>;
};

export default Leaderboard;
