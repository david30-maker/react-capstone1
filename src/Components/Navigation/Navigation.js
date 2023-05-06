import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import './Navigation.css';

const Navigation = () => {
  const iconStyle = {
    color: 'rgb(212, 209, 209)',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <Navbar className="nav-bar">
      <nav>
        <ul className="nav-Link">
          <li>
            <Link to="/" style={iconStyle}>
              <FaLessThan className="lessthan" style={iconStyle} />
              <span>Home</span>
            </Link>
          </li>
          <li className="header-List">
            <h1>Crypto Data Explorer</h1>
          </li>
          <li className="header-List">
            <div className="icon-class">
              <FaMicrophone style={iconStyle} />
              <FiSettings style={iconStyle} />
            </div>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Navigation;
