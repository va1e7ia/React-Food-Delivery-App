import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Информация о доставке</p>
        <div className="multi-fields">
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Имя" />
        </div>
        <input type="text" placeholder="Адрес эл. почты" />
        <input type="text" placeholder="Улица" />
        <div className="multi-fields">
          <input type="text" placeholder="Город" />
          <input type="text" placeholder="Индекс" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Область" />
          <input type="text" placeholder="Страна" />
        </div>
        <input type="text" placeholder="Номер телефона" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Общая сумма корзины</h2>
          <div>
            <div className="cart-total-details">
              <p>Промежуточный итог</p>
              <p>{getTotalCartAmount()} BYN</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Плата за доставку</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2} BYN</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Итог</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} BYN
              </b>
            </div>
          </div>
          <button>Перейти к оплате</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
