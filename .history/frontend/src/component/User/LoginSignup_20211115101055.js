import React, { Fragment } from 'react';
import './LoginSingUp.css';

const LoginSignup = () => {
    return (
        <Fragment>
            <div className="LoginSignUpContainer">
                <div className="LoginSignUpBox">
                    <div>
                        <div className="login_signUp_toggle">
                            <p onClick={(e) => switchTabs}></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default LoginSignup;
