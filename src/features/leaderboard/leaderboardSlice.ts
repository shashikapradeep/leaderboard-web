import {createSlice} from '@reduxjs/toolkit'

const initialState: object[] = [];

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        addLeader(state, action) {
            state.push(action.payload);
        },

        removeLeader(state, action) {
            state.push(action.payload);
        },

        increasePoint(state, action) {
            state.push(action.payload);
        },

        decreasePoint(state, action) {
            state.push(action.payload);
        }
    }
});

export const {addLeader,removeLeader, decreasePoint, increasePoint} = leaderboardSlice.actions
export default leaderboardSlice.reducer;
