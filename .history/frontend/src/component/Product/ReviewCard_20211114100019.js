import React from 'react';
import ReactStars from 'react-rating-stars-component';
import profilePng from '../../images/Profile.png';

const ReviewCard = ({ review }) => {

    const options = {
        edit: false,
        color: "rgba"
    }

    return (
        <div className="reviewCard">
            <img src={profilePng} alt="User" />
            <p>{review.name}</p>
            <ReactStars {...options} />
            <span className="reviewCardComment">{review.comment}</span>
        </div>
    )
};

export default ReviewCard;
