import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          главная
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          меню
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          приложение
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          контакты
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>войти</button>
      </div>
    </div>
  );
};

export default NavBar;
