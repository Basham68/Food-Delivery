// Redux/Slice/CartSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
// Redux/Slice/CartSlice.js
export const selectCartItemById = (state, id) =>
  state.cart.items.filter(item => item.id === id) || [];

export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
