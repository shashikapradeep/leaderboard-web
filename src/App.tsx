import './App.css';
import {ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./navigation/route";

import {useAppSelector} from "./state/hook";
import Light from "./themes/light";
import Dark from "./themes/dark";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import '@fontsource/roboto/700.css';

function App() {
    const themeType = useAppSelector(state => state.app.theme);
    return (
        <ThemeProvider theme={themeType === 'light' ? Light : Dark}>
            <RouterProvider router={router()}/>
        </ThemeProvider>
    );
}

export default App;
