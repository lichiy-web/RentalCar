import { createSlice } from '@reduxjs/toolkit';
import { unformatInput } from '../../utilits/utilits';

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
      filters = Object.entries(filters).map(([key, value]) => {
        const rawValue =
          typeof value === 'string' ? unformatInput(value) : value;
        return [key, rawValue];
      });
      return Object.fromEntries(filters);
    },
    setFilter: (state, { payload: { name, value } }) => {
      return {
        ...state,
        [name]: typeof value === 'string' ? value : { ...value },
      };
    },
    resetFilter: () => initialState,
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter, setFilter, resetFilter } = slice.actions;
