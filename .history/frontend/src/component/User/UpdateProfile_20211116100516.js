import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpdateProfile.css';
import Loader from '../layout/Loader/Loader';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FaceIcon from '@material-ui/icons/Face';
import { clearErrors, loadUser, updateProfile } from '../../actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstant';

const UpdateProfile = ({ history}) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { user } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const registerSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("avatar", avatar);
        dispatch(register(myForm));
    };

    const registerDataChange = (e) => {

        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);

    };

    useEffect(() => {

        if(user){
            setName(user.name);
            setEmail(user.email);
            setAvatarPreview(user.avatar.url);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success("Profile Updated Successfully");
            dispatch(loadUser());

            history.push("/account");

            dispatch({
                type: UPDATE_PROFILE_RESET,

            })
        }
    }, [dispatch, error, alert, history, user, is]);

    return (
        <div>

        </div>
    )
}

export default UpdateProfile;
