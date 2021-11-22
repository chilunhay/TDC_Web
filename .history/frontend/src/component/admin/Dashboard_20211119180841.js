import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import { Typography } from '@material-ui/core';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />

            <div className="dashboardContainer">
                <Typography component="h1"></Typography>
            </div>
        </div>
    )
}

export default Dashboard;
