import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import DashboardTemplate from "../components/template/DashboardTemplate";
import LeaderboardTemplate from "../components/template/LeaderboardTemplate";

export const router = () => createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route index element={<DashboardTemplate/>}></Route>
            <Route index element={<LeaderboardTemplate/>}></Route>
        </Route>
));

