// store.js
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Slice/CartSlice';
import restaurantReducer from './Slice/RestaurantSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});

export default store;
