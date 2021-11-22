import React, { Fragment, useEffect } from 'react';
import './orderDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import MetaData from '../layout/MetaData';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { getOrderDetails, clearErrors } from '../../actions/orderAction';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

const OrderDetails = () => {

    const dispatch = useDispatch();

    const alert = useAlert();

    const { loading, error, orders } = useSelector((state) => state.orderDetails);
    const { user } = useSelector((state) => state.user);

    return (
        <Fragment>

        </Fragment>
    )
}

export default OrderDetails;
