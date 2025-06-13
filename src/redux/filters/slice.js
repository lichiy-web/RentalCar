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
      console.log('In filters slice! ', { filters });
      console.log('BEFORE', { state });
      // state = { ...state, ...filters };
      Object.entries(filters).forEach(([name, value]) => (state[name] = value));
      console.log('AFTER', { state });
    },
  },
  // extraReducers: builder => {
  //     builder.addCase(logOut.fulfilled, () => initialState)
  // }
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
