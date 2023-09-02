import {createSlice} from '@reduxjs/toolkit'

interface AppInitialStateType {
  theme: string;
}

const initialState: AppInitialStateType = {
    theme: 'light',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.theme = action.payload.theme;
        }
    }
});

export const {changeTheme} = appSlice.actions;
export default appSlice.reducer;
