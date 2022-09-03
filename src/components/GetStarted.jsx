import React from 'react';
import { PrimaryButton } from './Button';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="getStarted-section">
      <div className="layout-wrapper">
        <div className="flex align-center space-between getStarted">
          <div className="getStarted-content">
            <h2>Let's try our service now!</h2>
            <p>
              Everything you need to accept payments and grown your business
              anywhere on the planet
            </p>
          </div>
          <div>
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
