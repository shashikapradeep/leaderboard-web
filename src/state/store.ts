import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import appSlice from "../features/app/appSlice";
import counterSlice from '../features/counter/counterSlice';
import leaderboardSlice from "../features/leaderboard/leaderboardSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        counter: counterSlice,
        leaderboard: leaderboardSlice
    }
});

export default  store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
