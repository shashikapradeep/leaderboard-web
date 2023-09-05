import * as React from 'react';
import Backdrop, {BackdropProps} from '@mui/material/Backdrop';
import CircularProgress, {CircularProgressProps} from '@mui/material/CircularProgress';

const SpinnerLoader = ({open = true}: BackdropProps) => {
    const [show, setShow] = React.useState(open);

    return (
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={show}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
};

export default SpinnerLoader;
