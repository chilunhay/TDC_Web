import React, { Fragment, useEffect } from 'react';
import './Products.css';
import { getProduct, clearErrors } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';
import Pagination from 'react-js-pagination';

const Products = ({ match }) => {

    const dispatch = useDispatch();

    useS

    const { products, loading, error, productsCount, resultPerPage } = useSelector(
        (state) => state.products
    );


    const keyword = match.params.keyword;

    useEffect(() => {
        dispatch(getProduct(keyword));
    }, [dispatch, keyword])

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <h2 className="productsHeading">Products</h2>

                    <div className="products">
                        {products &&
                            products.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                    </div>

                    <div className="paginationBox">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                        />
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
};

export default Products;
