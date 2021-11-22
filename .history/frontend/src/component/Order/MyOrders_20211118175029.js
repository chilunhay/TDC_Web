import React, { Fragment, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './myOrders.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, myOrders } from '../../actions/orderAction';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Typography from '@material-ui/core/Typography';
import MetaData from '../layout/MetaData';
import LaunchIcon from '@material-ui/icons/Launch';

const MyOrders = () => {

    const [loading, setloading] = useState(initialState)
    return (
        <Fragment>
            <MetaData title={`${user.name} - Orders`} />
            {loading ? (
                <Loader />
            ) : (
                <div className="myOrdersPage">
                    <DataGrid

                    />
                </div>
            )}
        </Fragment>
    )
}

export default MyOrders;
