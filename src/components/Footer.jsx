import React from 'react';
import { logo } from '../assets';
import { socialMedia, footerLinks } from '../constants/data';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="layout-wrapper footer-wrapper">
        <div className="flex space-between footer-extra-info">
          <FooterBrand />
          <FooterNav />
        </div>
        <FooterOutline />
      </div>
    </div>
  );
};

const FooterBrand = () => (
  <div className="footer-brand">
    <div className="fit-image footer-brand-logo">
      <img src={logo} alt="Hoobank" />
    </div>
    <div className="footer-brand-info">
      <p>A new way to make payments, easy, reliable and secure.</p>
    </div>
  </div>
);

const FooterOutline = () => (
  <div className="flex space-between footer-outline">
    <div className="footer-outline__license">
      <span className="footer-license__copyright">Copyright &copy;</span>
      <span className="footer-license__rights">
        {new Date().getFullYear()} Hoobank. All rights reversed.
      </span>
    </div>
    <div className="flex align-center">
      {socialMedia.map((media) => (
        <div key={media.id} className="social-media-img-box">
          <a href={media.link}>
            <img src={media.icon} alt={media.id} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

const FooterGroupedRoute = ({ route: { title, links } }) => (
  <nav className="flex column footer-grouped-route-nav">
    <h5 className="footer-grouped-title">{title}</h5>
    <ul className="footer-nested-route-list">
      {links.map(({ name, link }) => (
        <li className="footer-nested-route" key={`${name}: ${link}`}>
          <a href={link}>{name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const FooterNav = () => (
  <div className="flex footer-grouped-route">
    {footerLinks.map((relatedRoute) => (
      <FooterGroupedRoute key={relatedRoute.title} route={relatedRoute} />
    ))}
  </div>
);

export default Footer;
