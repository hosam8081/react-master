import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "./data";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";
export const getCartItem = createAsyncThunk(
  "cart/getCartItem",
  async (name, thunkApi) => {
    try {
      let resp = await axios(url);
      return resp.data
    } catch (err) {
      console.log(err);
    }
  }
);

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    amount: 0,
    total: 0,
    loading:true
  },
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
    },
    removeItem: (state, action) => {
      let id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },
    inc: (state, action) => {
      let id = action.payload;
      state.cartItem.filter((item) =>
        item.id === id ? (item.amount += 1) : ""
      );
    },
    dec: (state, action) => {
      let id = action.payload;
      let newItem = state.cartItem.find((item) => item.id === id);
      newItem.amount -= 1;
    },
    totalPrice: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.amount * item.price;
        // amount += item.amount;
        // total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItem.pending]: (state) => {
      state.loading = true;
    },
    [getCartItem.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.cartItem = action.payload
    },
    [getCartItem.rejected]: (state, action) => {
      state.loading = false;
    }
  },
});
export const { clearCart, removeItem, inc, dec, totalPrice } =
  cartReducer.actions;
export default cartReducer.reducer;
