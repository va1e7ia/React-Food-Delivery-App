import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Вход");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Вход" ? (
            <></>
          ) : (
            <input type="text" placeholder="Ваше имя" required />
          )}

          <input type="email" placeholder="Ваш email" required />
          <input type="password" placeholder="Пароль" required />
        </div>
        <button>
          {currState === "Регистрация" ? "Создать аккаунт" : "Вход"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            Продолжая, я соглашаюсь с условиями использования и политикой
            конфиденциальности.
          </p>
        </div>
        {currState === "Вход" ? (
          <p>
            Создать новый аккаунт?{" "}
            <span onClick={() => setCurrState("Регистрация")}>
              Нажмите здесь
            </span>
          </p>
        ) : (
          <p>
            Уже есть аккаунт?{" "}
            <span onClick={() => setCurrState("Вход")}>Вход здесь</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
