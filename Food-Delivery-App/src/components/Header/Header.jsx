import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Закажите свою любимую еду здесь</h2>
        <p>
          Выбирайте из разнообразного меню, где вас ждёт изысканное многообразие
          блюд, приготовленных из лучших ингредиентов с мастерским кулинарным
          искусством. Наша миссия — радовать ваш вкус и превращать каждый приём
          пищи в настоящее наслаждение.
        </p>
        <button>Открыть Меню</button>
      </div>
    </div>
  );
};

export default Header;
