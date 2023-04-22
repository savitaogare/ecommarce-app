import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    // reducer
    product: productReducer,
  },
});
export default store;