import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <div>
      Navbar Component
      <ul>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/coin_list">Cryptocurrencies</Link></li>
        <li><Link to="/wallet">My Coins</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
