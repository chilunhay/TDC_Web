import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import Product from './Product.js';

const product = {
    name: "Tan Ngu",
    images: [{ url: "https://cdn.discordapp.com/attachments/739045762767388766/906082279753916426/unknown_1.png" }],
    price: "200000",
    _id: "chitat2k",
};

const Home = () => {
    return (
        <Fragment>
            <div className="banner">
            <p>Welcome to TDC W</p>
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
