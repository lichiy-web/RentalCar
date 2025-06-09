import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchCar, fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload: error }) => {
  state.isLoading = false;
  if (error === 'canceled') return state;
  state.error = error;
};

const initialState = {
  cars: [],
  brands: [],
  isLoading: null,
  error: null,
  paginationData: {
    page: 1,
    totalCars: null,
    totalPages: null,
  },
  car: null,
};

const slice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(
        fetchCars.fulfilled,
        (state, { payload: { cars, ...paginationData } }) => {
          console.log({ catalog: { cars, paginationData } });
          state.isLoading = false;
          state.error = null;
          state.cars = cars;
          state.paginationData = paginationData;
        }
      )
      .addCase(fetchCars.rejected, handleReject)
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, { payload: brands }) => {
        console.log({ brands });
        state.isLoading = false;
        state.error = null;
        state.brands = brands;
      })
      .addCase(fetchBrands.rejected, handleReject)
      .addCase(fetchCar.pending, handlePending)
      .addCase(fetchCar.fulfilled, (state, { payload: car }) => {
        console.log({ car });
        state.isLoading = false;
        state.error = null;
        state.car = car;
      })
      .addCase(fetchCar.rejected, handleReject);
  },
});

export const catalogReducer = slice.reducer;
