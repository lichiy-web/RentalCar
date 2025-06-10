import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPageLoaded: false,
  favorite: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    completePage: state => {
      state.isPageLoaded = true;
    },
  },
});

export const appReducer = slice.reducer;
export const { completePage } = slice.actions;
