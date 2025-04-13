import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>КОМПАНИЯ</h2>
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Доставка</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>СВЯЖИТЕСЬ С НАМИ</h2>
          <ul>
            <li>+375 (29) 111-22-33</li>
            <li>contact@tastedelivery.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Авторское право 2025 @ TasteDelivery.com - Все Права Защищены.
      </p>
    </div>
  );
};

export default Footer;
