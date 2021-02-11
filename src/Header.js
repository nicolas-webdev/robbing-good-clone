import React from "react";
import Logo from "./robinhood.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        {/* logo */}
        <div className="header__logo">
          <img src={Logo} width={25} alt="logo" />
        </div>
        {/* search */}
        <div className="header__search">
          <div className="header__searchContainer">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {/* menu items */}
        <div className="header__menu">
          <a href="https://example.com/">Free Stocks</a>
          <a href="https://example.com/">Portfolio</a>
          <a href="https://example.com/">Cash</a>
          <a href="https://example.com/">Messages</a>
          <a href="https://example.com/">Account</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
