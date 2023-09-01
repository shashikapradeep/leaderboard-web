import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SpinnerLoader = () => {
    const [open, setOpen] = React.useState(true);
    const onClick = (e:any) => {
          e.preventDefault();
          setOpen(false);
    };

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" onClick={onClick} />
            </Backdrop>
        </div>
    );
};

export default SpinnerLoader;
