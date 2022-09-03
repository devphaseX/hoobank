import React from 'react';
import './Reviews';

const UserReview = ({ feedback }) => {
  return (
    <div className="user-review">
      <UserProductReview content={feedback.content} />
      <UserSummaryProfile feedback={feedback} />
    </div>
  );
};

const UserProductReview = ({ content }) => (
  <div className="user-review-info">{content}</div>
);

const UserSummaryProfile = ({ feedback }) => {
  const { img, name, title } = feedback;
  return (
    <div className="user-summary-profile flex align-center">
      <div className="user-image-profile">
        <img src={img} alt={name} />
      </div>
      <div className="flex column user-profile-info">
        <h4>{name}</h4>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default UserReview;
