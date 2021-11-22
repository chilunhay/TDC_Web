import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import {getProduct} from '../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';


const product = {
  name: "Tan Ngu",
  images: [{ url: "https://cdn.discordapp.com/attachments/739045762767388766/906082279753916426/unknown_1.png" }],
  price: "200000",
  _id: "chitat2k",
};

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProduct());
  }, [dispatch]);

  return (
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
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );

};

export default Home;
