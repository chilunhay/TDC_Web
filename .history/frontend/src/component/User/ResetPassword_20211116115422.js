import React, { Fragment, useState, useEffect } from 'react';
import './UpdatePassword.css';
import Loader from '../layout/Loader/Loader';
import { clearErrors, updatePassword } from '../../actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstant';
import MetaData from '../layout/MetaData';
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const ResetPassword = () => {
    return (
        <div>
            
        </div>
    )
}

export default ResetPassword;
