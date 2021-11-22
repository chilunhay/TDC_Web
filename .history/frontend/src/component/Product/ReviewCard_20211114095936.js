import React from 'react';
import ReactStars from 'react-rating-stars-component';
impo

const ReviewCard = ({ review }) => {

    const options = {

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
