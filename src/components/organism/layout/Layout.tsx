import {Outlet} from "react-router-dom";
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Sidebar} from './sidebar/Sidebar';
import {Grid} from "@mui/material";
export const Layout = () => <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid xs={12}><Header/></Grid>
    <Grid xs={2}><Sidebar/></Grid>
    <Grid xs={10}><Outlet/></Grid>
    <Grid xs={12}><Footer/></Grid>
</Grid>
