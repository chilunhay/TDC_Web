import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpdateProfile.css';
import Loader from '../layout/Loader/Loader';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import FaceIcon from '@material-ui/icons/Face';
import { clearErrors, login, register } from '../../actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const UpdateProfile = () => {
    return (
        <div>
            
        </div>
    )
}

export default UpdateProfile;
