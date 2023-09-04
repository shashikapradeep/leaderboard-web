import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Leaderboard from "../views/Leaderboard";
import {Layout} from "../components/organism/layout/Layout";

export const router = () => createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<Leaderboard/>}></Route>
    </Route>
));

