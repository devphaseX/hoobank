import React from 'react';
import { stats } from '../constants/data';
import './PlatformBoost.css';

const PlatformBoost = () => (
  <ul className="platform-boost">
    {stats.map((stat) => (
      <Stats stat={stat} key={stat.id} />
    ))}
  </ul>
);

function Stats({ stat }) {
  return (
    <li className="stat">
      <span className="stat-value">{stat.value}</span>
      <span className="stat-title gradient-text radial-gradient-blue-bg">
        {stat.title}
      </span>
    </li>
  );
}
export default PlatformBoost;
