import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';

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

            <h2 className="homeHeading">Fea</h2>
        </Fragment>
    );

};

export default Home;
