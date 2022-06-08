import { createSlice, current } from "@reduxjs/toolkit";
import data from "./data";
const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cartItem: data,
    amount: 0,
    total:0,
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
      state.cartItem.forEach(item => {
        amount = amount + item.amount;
        total = total + item.amount * item.price;
        // amount += item.amount;
        // total += item.amount * item.price;
      })
      state.amount = amount;
      state.total = total
    },
  },
});
console.log(cartReducer);
export const { clearCart, removeItem, inc, dec, totalPrice} = cartReducer.actions;
export default cartReducer.reducer;
