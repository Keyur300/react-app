import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import Product from '../features/product/Product';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    product: Product
  },
});
