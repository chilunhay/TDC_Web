import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import Product from './Product.js';

const product = {
    name: "Blue Tshirt",
    price: "200000",
    
};

const Home = () => {
    return (
        <Fragment>
            <div className="banner">
                <p>Welcome to TDC Watches</p>
                <h1>Find Amazing Product Below</h1>

                <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                <Product products={products} />
            </div>
        </Fragment>
    );

};

export default Home;
