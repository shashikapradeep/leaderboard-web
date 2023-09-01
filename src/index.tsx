import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {ThemeProvider} from "@mui/material";
import light from './themes/light';
import {RouterProvider} from "react-router-dom";
import {router} from "./navigation/route";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={light}>
                <RouterProvider router={router()}/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
