import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  search: ''
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload.trim();
    },
    clearSearch: (state) => {
      state.search = '';
    }
  }
})

export const {
  changeSearch,
  clearSearch
} = searchSlice.actions;

export default searchSlice.reducer;