import React, { useEffect } from "react";
import { CartItems } from "../../components/cart/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { cartActions, modalActions } from "../../store";
const Cartcontainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalActions.openModal());
  };

  useEffect(() => {
    dispatch(cartActions.calculateTotal());
  }, [cartItems]);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={openModal}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export { Cartcontainer };
