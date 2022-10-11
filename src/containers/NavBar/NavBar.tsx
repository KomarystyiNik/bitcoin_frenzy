import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { IconGraph } from 'lib/icons/IconGraph';
import { menuItems, IMenu } from './assets';

import './NavBar.scss';


const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="nav-bar-container" >
      <nav>
        <ul>
          {menuItems.map(({title, path}: IMenu) => {
            return (
              <li key={path} className={(path === location.pathname) ? "bold" : ""}>
                <IconGraph />
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </div>
  );
};

export default NavBar;
export { NavBar };
