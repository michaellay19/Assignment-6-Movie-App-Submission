import React from "react";
import "./Header.css";
import Search from "./Search";

const Header = ({ title, onSearch }) => {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <Search onSearch={onSearch} />
    </header>
  );
};

export default Header;
