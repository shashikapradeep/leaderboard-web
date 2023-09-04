import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import {Layout} from "../components/organism/layout/Layout";

export const router = () => createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<Dashboard/>}></Route>
    </Route>
));

