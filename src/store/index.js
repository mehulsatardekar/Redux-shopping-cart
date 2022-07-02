import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cartSlice";
import { modalSlice } from "./slices/modalSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, modal: modalSlice.reducer },
});

const cartActions = cartSlice.actions;
const modalActions = modalSlice.actions;

export { store, cartActions, modalActions };
