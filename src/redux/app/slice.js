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
    toggleFavoriteCar: (state, { payload: carId }) => {
      if (state.favorite.includes(carId)) {
        state.favorite = state.favorite.filter(favId => favId !== carId);
      } else {
        state.favorite.push(carId);
      }
    },
  },
});

export const appReducer = slice.reducer;
export const { completePage, toggleFavoriteCar } = slice.actions;
