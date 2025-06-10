import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: null,
  rentalPrice: null,
  minMileage: null,
  maxMileage: null,
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, { payload: filters }) => {
      state = filters;
    },
  },
  // extraReducers: builder => {
  //     builder.addCase(logOut.fulfilled, () => initialState)
  // }
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
