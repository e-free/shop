import { createSlice } from "@reduxjs/toolkit";


export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchItemsRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchItemsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchItemsMoreSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      if (state.items.some((el) => el.id !== action.payload.id)) {
        state.items = [...state.items, action.payload];
      }
    },
    fetchItemsMoreEmpty: (state, action) => {
      state.loading = false;
      state.error = null;
      state.empty = true;
    },
    fetchItemSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.item = action.payload;
    },
    responseSearch: (state) => {
      state.searchResponse = true;
      state.loading = false;
    },
  }
})

export const {
  fetchItemsRequest,
  fetchItemsFailure,
  fetchItemsSuccess,
  fetchItemsMoreSuccess,
  fetchItemsMoreEmpty,
  fetchItemSuccess,
  responseSearch
} = itemsSlice.actions;

export default itemsSlice.reducer;