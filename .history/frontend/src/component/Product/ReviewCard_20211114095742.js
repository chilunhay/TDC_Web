import React from 'react';

const ReviewCard = ({ review }) => {

    const options = {

    }

    return (
        <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
    )
};

export default ReviewCard;
