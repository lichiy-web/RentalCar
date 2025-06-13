import { createSlice } from '@reduxjs/toolkit';
import { unformatInput } from '../../utilits/utilits';

const initialState = {
  brand: undefined,
  rentalPrice: undefined,
  minMileage: undefined,
  maxMileage: undefined,
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, { payload: filters }) => {
      // console.log('In filters slice! ', { filters });
      filters = Object.entries(filters).map(([key, value]) => {
        const rawValue =
          typeof value === 'string' ? unformatInput(value) : value;
        // console.log({ [key]: rawValue });
        return [key, rawValue];
      });
      return Object.fromEntries(filters);
    },
    setFilter: (state, { payload: { name, value } }) => {
      // console.log('In setFilters! ', { name, value });
      state[name] = typeof value === 'string' ? value : { ...value };
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter, setFilter } = slice.actions;
