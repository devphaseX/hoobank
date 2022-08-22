import React from 'react';
import { navLinks } from '../constants/data';

const NavItem = ({ link: { id, title } }) => (
  <li>
    <a href={`/${id}`}>{title}</a>
  </li>
);

const NavBar = () => {
  return (
    <nav>
      <div></div>
      <div>
        <ul>
          {navLinks.map((link) => (
            <NavItem link={link} key={link.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
