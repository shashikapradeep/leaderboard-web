import {useEffect, useState} from "react";
import {getOne, getAll, store, remove, updateScore} from '../services/leaderboard/leaderboardApi';
import {setAllLeaders, setLoader, setViewLeader, setErrorLeader} from '../features/leaderboard/leaderboardSlice';
import SpinnerLoader from "../components/atomic/Loader/SpinnerLoader";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";
import {useAppDispatch, useAppSelector} from "../state/hook";
import {LeaderDataType} from "../types/leaderboardTypes";
import {FormikHelpers} from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Leaderboard = () => {

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.leaderboard.isLoading);
    const allLeaders = useAppSelector(state => state.leaderboard.allLeaders);

    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

    useEffect(() => {
        fetchLeaders();
    }, []);

    /**
     * TODO: Following state update functions should be further improved
     *
     */
    const fetchLeader = (id: number) => {
        dispatch(setLoader(true));
        dispatch(setErrorLeader({error: null}));
        getOne(id).then(leader => {
            dispatch(setViewLeader({viewLeader: leader, isLoading: false}));
            dispatch(setLoader(false));
        }).catch((error) => {
                dispatch(setErrorLeader({error: {fetchLeader: error}}));
                dispatch(setLoader(false));
            }
        );
    }

    const fetchLeaders = () => {
        dispatch(setLoader(true));
        dispatch(setErrorLeader({error: null}));
        getAll().then(leaders => {
            dispatch(setAllLeaders({allLeaders: leaders, isLoading: false}));
            dispatch(setLoader(false));
        }).catch((error) => {
                dispatch(setErrorLeader({error: {fetchLeader: error}}));
                dispatch(setLoader(false));
            }
        );
    }

    const createLeader = (leaderData: LeaderDataType) => {
        dispatch(setLoader(true));
        dispatch(setErrorLeader({error: null}));
        store(leaderData).then(leaders => {
            dispatch(setLoader(false));
            fetchLeaders();
        }).catch((error) => {
                dispatch(setErrorLeader({error: {createLeader: error}}));
                dispatch(setLoader(false));
            }
        );
    }

    const deleteLeader = (id: number) => {
        dispatch(setLoader(true));
        dispatch(setErrorLeader({error: null}));
        remove(id).then(leaders => {
            dispatch(setLoader(false));
            fetchLeaders();
        }).catch((error) => {
                dispatch(setErrorLeader({error: {deleteLeader: error}}));
                dispatch(setLoader(false));
            }
        );
    }

    const updateLeaderScore = (id: number, context: string) => {
        dispatch(setLoader(true));
        dispatch(setErrorLeader({error: null}));
        updateScore(id, context).then(leaders => {
            dispatch(setLoader(false));
            fetchLeaders();
        }).catch((error) => {
                dispatch(setErrorLeader({error: {updateLeader: error}}));
                dispatch(setLoader(false));
            }
        );
    }

    const handleAction = (id: number, context: string) => {
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

    return <Box m={2}>
        {isLoading && <SpinnerLoader open={isLoading}/>}
        <h2>Dashboard</h2>
        <LeaderboardTemplate allLeaders={allLeaders} handleAction={handleAction}
                             handleCreateLeader={handleCreateLeader} openCreateUserModal={openCreateModal}/>
    </Box>;
};

export default Leaderboard;
