import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Cartcontainer } from "./components/cart/Cartcontainer";
import { Modal } from "./components/modal/Modal";

import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./store/slices/cartSlice";

function App() {
  const { cartItems, isLoading, errorMessage } = useSelector(
    (state) => state.cart
  );
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems({ name: "alex" }));
  }, []);
  return (
    <>
      <Navbar />

      {isLoading ? (
        <div className="loading">
          <span className="loader"></span>
          <h5>{errorMessage}</h5>
        </div>
      ) : (
        <>
          <Cartcontainer />
          {isOpen && <Modal />}
        </>
      )}
    </>
  );
}

export default App;
