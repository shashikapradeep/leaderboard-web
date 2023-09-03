import {createSlice} from '@reduxjs/toolkit'
import {LeaderDBType} from '../../types/main';
interface LeaderboardType{
    isLoading: boolean;
    leadersList: LeaderDBType[];
}

const initialState: LeaderboardType = {
    isLoading: false,
    leadersList: []
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        addLeader(state, action) {
            state.leadersList.push(action.payload);
        },

        removeLeader(state, action) {
            state.leadersList.push(action.payload);
        },

        increasePoint(state, action) {
            state.leadersList.push(action.payload);
        },

        decreasePoint(state, action) {
            state.leadersList.push(action.payload);
        }
    }
});

export const {addLeader,removeLeader, decreasePoint, increasePoint} = leaderboardSlice.actions
export default leaderboardSlice.reducer;
