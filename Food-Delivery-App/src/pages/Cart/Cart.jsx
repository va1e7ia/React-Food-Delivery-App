import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Блюдо</p>
          <p>Название</p>
          <p>Цена</p>
          <p>Количество</p>
          <p>Итого</p>
          <p>Удалить</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} BYN</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} BYN</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Общая сумма корзины</h2>
          <div>
            <div className="cart-total-details">
              <p>Промежуточный итог</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Плата за доставку</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Итог</b>
              <b>{0}</b>
            </div>
          </div>
          <button>Перейти к оформлению заказа</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Если у вас есть промокод, введите его здесь</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="промокод" />
              <button>Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
