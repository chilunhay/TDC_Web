import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import { Typography } from '@material-ui/core';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />

            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>
            </div>

            <div className="dashboardSummary">
                <div>
                    <p>
                        Total amount <br /> 2000$
                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default Dashboard;
