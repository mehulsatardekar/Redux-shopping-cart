import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItems } from "../../cartitems";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  errorMessage: null,
};

// const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return;
//   }
// });

const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async ({ name }, { rejectWithValue }) => {
    //console.log(name);
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCartItems(state) {
      state.cartItems = [];
    },
    removeItem(state, action) {
      const itemid = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemid);
    },

    increseItem(state, action) {
      const itemid = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemid);
      cartItem.amount = cartItem.amount + 1;
    },

    decreaseItem(state, action) {
      const itemid = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemid);
      if (cartItem.amount > 1) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotal(state) {
      let cartamount = 0;
      let carttotal = 0;
      const amount = state.cartItems.map((item) => {
        cartamount += item.amount;
        carttotal += item.amount * item.price;
      });

      state.amount = cartamount;
      state.total = carttotal;
    },
  },

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },

    [getCartItems.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.cartItems = action.payload;
    },

    [getCartItems.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
      state.errorMessage = action.payload;
    },
  },
});

export { cartSlice, getCartItems };
