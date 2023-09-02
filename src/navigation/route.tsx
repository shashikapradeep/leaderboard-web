import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import DashboardTemplate from "../components/template/DashboardTemplate";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";
import {Layout} from "../components/organism/layout/Layout";

export const router = () => createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<DashboardTemplate/>}></Route>
        <Route path={'/leaderboard'} element={<LeaderboardTemplate/>}></Route>
    </Route>
));

