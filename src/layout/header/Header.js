import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <span>
        Todo list.
      </span>
    </header>
  );
}
export default Header;