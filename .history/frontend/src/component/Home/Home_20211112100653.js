import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';

const Home = () => {
    return <Fragment>
        <div className="banner">
            <p>Welcome to TDC Watches</p>
            <h1>Find Amazing Product Below</h1>

            <a href="#container">
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
        </div>
    </Fragment>
        
    
};

export default Home;
