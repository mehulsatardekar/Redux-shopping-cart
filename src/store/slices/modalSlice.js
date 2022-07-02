import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: intialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export { modalSlice };
