import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import {getProduct} from '../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';



const Home = () => {

  const dispatch = useDispatch();

  const { loading, error, products, productsCount} = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    dispatch(getProduct());
  }, [dispatch]);


  return (
    <Fragment>

      {loading ? (
        "loading"
        ) : (
          
        )}
    </Fragment>
  );

};

export default Home;
