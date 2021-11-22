import React from 'react';
import './sidebar.css';
import logo from '../../images/logo1.jpg';
import { Link } from 'react-router-dom';
import { TreeView, TreeItem } from '@material-ui/lab';
import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Sidebar = () => {
    return (
        <div>
            
        </div>
    )
}

export default Sidebar;
