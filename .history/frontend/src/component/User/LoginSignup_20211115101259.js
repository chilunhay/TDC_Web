import React, { Fragment } from 'react';
import './LoginSingUp.css';

const LoginSignup = () => {
    return (
        <Fragment>
            <div className="LoginSignUpContainer">
                <div className="LoginSignUpBox">
                    <div>
                        <div className="login_signUp_toggle">
                            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                        </div>
                        <button ref={switcherTabs}></button>
                    </div>
                    <form className="LoginForm" ref={loginTab} onS>


                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginSignup;
