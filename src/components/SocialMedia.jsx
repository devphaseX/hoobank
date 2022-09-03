import React from 'react';
import { socialMedia } from '../constants/data';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-media-accounts">
      {socialMedia.map((media) => (
        <div key={media.id} className="account">
          <a href={media.link}>
            <img src={media.link} alt={media.link} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
