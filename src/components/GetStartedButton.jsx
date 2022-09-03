import React from 'react';
import { ButtonOutline } from '.';
import { arrowUp } from '../assets';
import './GetStartedButton.css';

const GetStartedButton = () => {
  return (
    <ButtonOutline
      type="button"
      classlist={['get-started-button', 'flex-center-content']}
    >
      <span>
        <span className="content-first gradient-text">
          <span>Get</span>
          <span className="started-arrow-icon">
            <img src={arrowUp} alt="arrow up" />
          </span>
        </span>
        <span className="content-second gradient-text">Started.</span>
      </span>
    </ButtonOutline>
  );
};

export default GetStartedButton;
