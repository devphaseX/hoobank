import React from 'react';
import BusinessFeature, { FeatureInfo } from './Feature';
import { bill, card, apple, google } from '../assets/';
import './Features.css';
import SocialMedia from './SocialMedia';
import { PrimaryButton } from './Button';

const invoiceBillingInfo = {
  title: 'Easily control your billing & invoicing.',
  content: `Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
              Fusce ipsum orci rhoncus aliporttitor integer platea placerat.`,
};

const betterCardInfo = {
  title: 'Find a better card deal in few easy steps.',
  content: `Arcu tortor, purus in mattis at sed integer faucibus. 
              Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.`,
};

const Features = () => {
  return (
    <div className="features">
      <div className="layout-wrapper features-wrapper">
        <BusinessFeature />
        <InvoiceBillingFeature />
        <BetterCardFeature />
      </div>
    </div>
  );
};

function FeatureImageBoard({ src, alt }) {
  return (
    <div className="featureImageBoard">
      <img src={src} alt={alt} />
    </div>
  );
}

function GetPlatformMobileAppButtons() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '45px' }}>
        <img src={apple} alt="get app iphone users" />
      </div>
      <div>
        <img src={google} alt="get app android users" />
      </div>
    </div>
  );
}

function InvoiceBillingFeature() {
  return (
    <div className="invoiceBilling">
      <FeatureImageBoard src={bill} alt={invoiceBillingInfo.title} />
      <FeatureInfo
        info={{
          title: invoiceBillingInfo.title,
          content: invoiceBillingInfo.content,
          actionElement: <GetPlatformMobileAppButtons />,
        }}
      />
    </div>
  );
}

function BetterCardFeature() {
  return (
    <div className="bettercard">
      <FeatureInfo
        info={{
          title: betterCardInfo.title,
          content: betterCardInfo.content,
          actionElement: <PrimaryButton>Get started</PrimaryButton>,
        }}
      />
      <FeatureImageBoard src={card} alt={betterCardInfo.title} />
    </div>
  );
}

export default Features;
