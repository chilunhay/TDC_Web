import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/'


const Home = () => {

  const dispatch = useDispatch();

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    dispatch(getProduct());
  }, [dispatch]);


  return (
    <Fragment>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="TDC WATCHES" />

          <div className="banner">
            <p>Welcome to TDC Watches</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">

            {products && products.map((product) => <Product product={product} />)}

          </div>
        </Fragment>
      )}
    </Fragment>
  );

};

export default Home;