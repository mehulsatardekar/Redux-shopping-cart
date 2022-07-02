import React from "react";
import { useDispatch } from "react-redux";
import { modalActions, cartActions } from "../../store";
const Modal = () => {
  const dispatch = useDispatch();

  const clearItem = () => {
    dispatch(cartActions.clearCartItems());
    dispatch(modalActions.closeModal());
  };

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={clearItem}>
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={closeModal}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export { Modal };
