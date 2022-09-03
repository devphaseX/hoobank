import React, { useMemo, useState } from 'react';
import { navLinks as linksData } from '../constants/data';
import { logo as logoHref } from '../assets';
import './NavBar.css';
import { mergeStyleClassName } from '../utils';

const NavItem = ({ link, isActive, setAsActive, isHoverLink, setIsHover }) => {
  const { id, title } = link;
  return (
    <li
      className={mergeStyleClassName(
        'navigation-item',
        (isActive && isHoverLink === null) ||
          (!isActive && isHoverLink === link)
          ? 'navigation-item--active'
          : ''
      )}
      onClick={() => setAsActive(link)}
      onMouseEnter={() => setIsHover(link)}
      onMouseLeave={() => setIsHover(null)}
    >
      <a href={`/${id}`}>{title}</a>
    </li>
  );
};

const NavBar = () => {
  const navLinks = useMemo(() => linksData, []);
  const [isHoveringAroundNav, setIsHoveringAroundNav] = useState(false);
  const [currentActiveLink, setCurrentActiveLink] = useState(navLinks[0]);
  const [currentHoveredLink, setCurrentHoveredLink] = useState(null);

  return (
    <nav className="navigation">
      <div className="layout-wrapper">
        <div className="brand-logo-container">
          <img src={logoHref} alt="hoobank brand logo" />
        </div>
        <div
          onMouseEnter={() => setIsHoveringAroundNav(true)}
          onMouseLeave={() => setIsHoveringAroundNav(false)}
        >
          <ul className="header-navigation">
            {navLinks.map((link) => (
              <NavItem
                link={link}
                key={link.id}
                isActive={currentActiveLink === link && !isHoveringAroundNav}
                setAsActive={setCurrentActiveLink}
                isHoverLink={currentHoveredLink}
                setIsHover={setCurrentHoveredLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
