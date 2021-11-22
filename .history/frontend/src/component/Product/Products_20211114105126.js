import React, { Fragment } from 'react';
import './Products.css';
import { getProduct, clearErrors } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';

const Products = () => {
    return (
        <Fragment>
            {loading ? <Loader}
        </Fragment>
    )
};

export default Products;
