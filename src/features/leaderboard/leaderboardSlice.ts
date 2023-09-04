import {createSlice} from '@reduxjs/toolkit'
import {LeaderDBType, LeaderType} from '../../types/main';

interface LeaderboardSliceType {
    isLoading: boolean;
    allLeaders: LeaderDBType[];
    createLeader: LeaderType | null,
    viewLeader: LeaderDBType | null,
    deletedLeader: LeaderDBType | number | null,
    error: object | null
}

const initialState: LeaderboardSliceType = {
    isLoading: false,
    allLeaders: [],
    createLeader: null,
    viewLeader: null,
    deletedLeader: null,
    error: null
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setLoader(state, action) {
            state.isLoading = action.payload;
        },

        setAllLeaders(state, action) {
            state = {...state, ...action.payload};
        },

        setCreateLeader(state, action) {
            state.createLeader = action.payload;
        },

        setViewLeader(state, action) {
            state = {...state, ...action.payload};
        },

        setDeletedLeader(state, action) {
            state = {...state, ...action.payload};
        },

        setError(state, action) {
            state = {...state, ...action.payload};
        }
    }
});

export const {
    setLoader,
    setAllLeaders,
    setCreateLeader,
    setViewLeader,
    setDeletedLeader,
    setError
} = leaderboardSlice.actions

export default leaderboardSlice.reducer;
