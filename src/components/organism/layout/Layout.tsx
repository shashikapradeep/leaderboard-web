import {Outlet} from "react-router-dom";
import ResponsiveAppBar from './header/ResponsiveAppBar';
import {Footer} from './footer/Footer';
import {Grid} from "@mui/material";
export const Layout = () => <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid xs={12}><ResponsiveAppBar/></Grid>
    <Grid xs={12}><Outlet/></Grid>
    <Grid xs={12}><Footer/></Grid>
</Grid>
