import React from 'react';
import { discount, robot } from '../assets';
import { getCurrentDiscountMessage } from '../constants/data';
import './Hero.css';
import { GetStartedButton } from '.';
import { PrimaryButton } from './Button';
import PlatformBoost from './PlatformBoost';

const HeroTag = ({ highlighableMessage }) => (
  <div className="heroTag">
    <div>
      <img src={discount} alt="star" />
    </div>
    <div>
      {highlighableMessage.map((part) => (
        <span
          key={part.content}
          className={part.highlight ? 'heroTagContentHighLight' : null}
        >
          {part.content}
        </span>
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <>
      <div style={{ background: 'var(--bg-colour)' }}></div>
      <section className="hero-section">
        <div className="layout-wrapper">
          <div className="hero">
            <div className="hero-content">
              <HeroTag highlighableMessage={getCurrentDiscountMessage()} />
              <div className="main-hero-intro">
                <h1>
                  <span>The Next</span>
                  <br />
                  <span className="gradient-text radial-gradient-blue-bg">
                    Generation
                  </span>
                  <br />
                  <span>Payment method</span>
                </h1>
                <div className="action-button-ctn">
                  <GetStartedButton />
                </div>
                <div></div>
              </div>

              <p className="main-hero-content">
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
            <div className="heroBanner">
              <img src={robot} alt="heroBannerRobot" />
            </div>
          </div>
          <PlatformBoost />
        </div>
      </section>
    </>
  );
};

export default Hero;
