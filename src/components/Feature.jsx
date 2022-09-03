import React from 'react';
import { features } from '../constants/data';
import { PrimaryButton } from './Button';
import './Feature.css';
import { mergeStyleClassName } from '../utils';

const BusinessFeature = () => {
  return (
    <div className="business-goal">
      <FeatureInfo
        info={{
          ...businessInfo,
          actionElement: <PrimaryButton>Get started</PrimaryButton>,
        }}
      />
      <div>
        <ul>
          {features.map((feature) => (
            <Goal feature={feature} key={feature.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function FeatureInfo({ info: { title, content, actionElement } }) {
  return (
    <div className="primary-goal">
      <h3 className="primary-goal-headline">{title}</h3>
      <p className="primary-goal-content">{content}</p>
      {actionElement}
    </div>
  );
}

const businessInfo = {
  title: 'You do the business, we’ll handle the money.',
  content: ` With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds of
            credit cards on the market.`,
};

function Goal({ feature }) {
  return (
    <li
      className={mergeStyleClassName(
        'goal',
        feature.standout ? 'goal--active' : ''
      )}
    >
      <div className="goal-icon center-content">
        <img src={feature.icon} alt={feature.title} />
      </div>
      <div className="goal-info">
        <h4 className="goal-title">{feature.title}</h4>
        <p className="goal-content">{feature.content}</p>
      </div>
    </li>
  );
}

export { FeatureInfo };
export default BusinessFeature;
