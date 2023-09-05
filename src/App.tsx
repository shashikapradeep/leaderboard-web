import './App.css';
import {ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./navigation/route";
import {useSelector} from "react-redux";
import Light from "./themes/light";
import Dark from "./themes/dark";

function App() {
    const themeType = useSelector<any>(state => state.app.theme);
    return (
        <ThemeProvider theme={themeType === 'light' ? Light : Dark}>
            <RouterProvider router={router()}/>
        </ThemeProvider>
    );
}

export default App;
