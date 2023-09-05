import {createSlice} from '@reduxjs/toolkit'
import {LeaderDBType, LeaderDataType} from '../../types/leaderboardTypes';

interface LeaderboardSliceType {
    isLoading: boolean;
    allLeaders: LeaderDBType[];
    createLeader: LeaderDataType | null,
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
            state.allLeaders = action.payload.allLeaders;
        },

        setCreateLeader(state, action) {
            state.createLeader = action.payload.createLeader;
        },

        setViewLeader(state, action) {
            state.viewLeader = action.payload.viewLeader;
        },

        setDeletedLeader(state, action) {
            state.deletedLeader = action.payload.deletedLeader;
        },

        setError(state, action) {
            state.error = action.payload.error;
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
