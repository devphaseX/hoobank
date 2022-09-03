import { feedback } from '../constants/data';

import React from 'react';
import UserReview from './UserReview';
import './Reviews.css';

const Reviews = () => {
  return (
    <section>
      <div className="flex space-between reviews">
        {feedback.map((review) => (
          <UserReview key={review.id} feedback={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
