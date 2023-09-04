import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import AddLeader from "../views/AddLeader";
import Leaderboard from "../views/Leaderboard";
import {Layout} from "../components/organism/layout/Layout";

export const router = () => createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path={'/leaderboard'} element={<Leaderboard/>}></Route>
        <Route path={'/leaderboard/add'} element={<AddLeader/>}></Route>
    </Route>
));

