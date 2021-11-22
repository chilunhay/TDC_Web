import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from '@mui/material';

const UserOptions = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                icon={ <img
                    className="SpeedDialIcon"
                    src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                    alt
                />}
            >
            
            </SpeedDial>
        </Fragment>
    )
}

export default UserOptions;
