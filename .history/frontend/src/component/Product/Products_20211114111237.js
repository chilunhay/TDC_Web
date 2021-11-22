import React, { Fragment, useEffect } from 'react';
import './Products.css';
import { getProduct, clearErrors } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';

const Products = () => {

    const dispatch = useDispatch();

    const { products, loading, error, productsCount } = useSelector(
        (state) => state.products
    );


    const keyword

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch,])

    return (
        <Fragment>
            {loading ? (
                <Loader/>
            ) : ( 
                <Fragment>
                    <h2 className="productsHeading">Products</h2>

                    <div className="products">
                        {products &&
                            products.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
};

export default Products;
