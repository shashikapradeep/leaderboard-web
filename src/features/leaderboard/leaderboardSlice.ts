import {createSlice} from '@reduxjs/toolkit'
import {LeaderDBType, LeaderDataType, LeaderError} from '../../types/leaderboardTypes';

interface LeaderboardSliceType {
    isLoading: boolean;
    allLeaders: LeaderDBType[];
    createLeader: LeaderDataType | null,
    viewLeader: LeaderDBType | null,
    deletedLeader: LeaderDBType | number | null,
    errorLeader: LeaderError | null
}

const initialState: LeaderboardSliceType = {
    isLoading: false,
    allLeaders: [],
    createLeader: null,
    viewLeader: null,
    deletedLeader: null,
    errorLeader: null
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

        setErrorLeader(state, action) {
            state.errorLeader = action.payload.error;
        }
    }
});

export const {
    setLoader,
    setAllLeaders,
    setCreateLeader,
    setViewLeader,
    setDeletedLeader,
    setErrorLeader
} = leaderboardSlice.actions

export default leaderboardSlice.reducer;
