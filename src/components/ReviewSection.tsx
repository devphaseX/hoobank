import React from 'react';
import { ReviewSectionHeader } from './ReviewSectionHeader';
import './ReviewSection.css';
import Reviews from './Reviews';

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="layout-wrapper">
        <ReviewSectionHeader />
        <Reviews />
      </div>
    </section>
  );
};

export default ReviewSection;
