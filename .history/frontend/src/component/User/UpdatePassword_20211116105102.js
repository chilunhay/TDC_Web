import React, { Fragment, useState, useEffect } from 'react';
import './UpdatePassword.css';
import Loader from '../layout/Loader/Loader';
import { clearErrors, updatePassword } from '../../actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstant';
import MetaData from '../layout/MetaData';

const UpdatePassword = () => {
    return (
        <div>
            
        </div>
    )
}

export default UpdatePassword;
