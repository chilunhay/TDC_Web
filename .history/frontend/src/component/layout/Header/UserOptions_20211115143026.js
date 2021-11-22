import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import {DashboardIcon, PersonIcon, ExitToAppIcon, ListAltIcon, Dashboard} from '@mui/icons-material';
// import PersonIcon from '@material-ui/icons';
// import ExitToAppIcon from '@material-ui/icons';
// import ListAltIcon from '@material-ui/icons';

const UserOptions = ({ user }) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                icon={ 
                    <img
                        className="SpeedDialIcon"
                        src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                        alt="Profile"
                    />
                }
            >

                <SpeedDialAction icon={<Dashboard} />
            </SpeedDial>
        </Fragment>
    )
}

export default UserOptions;
