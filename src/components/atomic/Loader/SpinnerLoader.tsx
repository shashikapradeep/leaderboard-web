import Backdrop, {BackdropProps} from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SpinnerLoader = ({open = true}: BackdropProps) => {
    return (
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
};

export default SpinnerLoader;
