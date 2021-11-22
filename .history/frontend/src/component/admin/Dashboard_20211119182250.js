import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Doughnut, Line } from 'react-chartjs-2';

const Dashboard = () => {

    const lineState = {
        label: ["Initial Amount", "Amount Earned"], 
        dataset: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"]
                
            },
        ]
    };

    return (
        <div className="dashboard">
            <Sidebar />

            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>


                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total amount <br /> 2000$
                        </p>
                    </div>

                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Product</p>
                            <p>50</p>
                        </Link>

                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>4</p>
                        </Link>

                        <Link to="/admin/users">
                            <p>Users</p>
                            <p>2</p>
                        </Link>
                    </div>
                </div>

                <div className="lineChart">
                    <Line data={lineState} />
                </div>

            </div>
        </div>
    )
}

export default Dashboard;
