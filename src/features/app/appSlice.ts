import {createSlice} from '@reduxjs/toolkit'

const initialState: object = {
    theme: 'light',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeTheme(state, action) {
            state = {...state, ...action.payload};
        }
    }
});

export const {changeTheme} = appSlice.actions;
export default appSlice.reducer;
