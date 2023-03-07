import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  orders: null,
  loading: false,
  error: null,
  status: false,
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      if (state.orders) {
        state.orders = state.orders.filter((el) => el.id !== action.payload);
      };
    },
    clearCart: (state) => {
      state.orders = null;
      state.status = false;
    },
    updateCart: (state, action) => {
      state.orders = action.payload;
    },
    postCartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    postCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    postCartSuccess: (state) => {
      state.loading = false;
      state.status = true;
    },
  }
})

export const {
  removeItem,
  clearCart,
  updateCart,
  postCartRequest,
  postCartFailure,
  postCartSuccess
} = cartSlice.actions;

export default cartSlice.reducer;