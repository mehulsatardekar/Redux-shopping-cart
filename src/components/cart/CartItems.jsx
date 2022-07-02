import React from "react";
import { ChevronDown, ChevronUp } from "../../icons";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const increaseItemQuantity = () => {
    dispatch(cartActions.increseItem(id));
  };

  const decreaseItemQuantity = () => {
    dispatch(cartActions.decreaseItem(id));
  };
  return (
    <article className="cart-item" key={id}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={removeItem}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={increaseItemQuantity}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={decreaseItemQuantity}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export { CartItems };
