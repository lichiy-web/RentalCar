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
const defaultPerPage = 12;

const initialState = {
  cars: [],
  brands: [],
  isLoading: null,
  error: null,
  paginationData: {
    perPage: defaultPerPage,
    page: 1,
    totalCars: null,
    totalPages: null,
    hasNextPage: null,
  },
  car: null,
};

const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    resetCatalogControls: () => {
      console.log('Reset catalog!');
      return initialState;
    },
    setPage: (state, { payload: page }) => {
      state.paginationData.page = page;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(
        fetchCars.fulfilled,
        (
          state,
          { payload: { cars, page, perPage, totalCars, totalPages } }
        ) => {
          console.log({
            catalog: { cars, page, perPage, totalCars, totalPages },
          });
          state.isLoading = false;
          state.error = null;
          state.cars = state.cars.concat(cars);
          state.paginationData.page = Number(page);
          state.paginationData.perPage = Number(perPage) || defaultPerPage;
          state.paginationData.totalPages = Number(totalPages);
          state.paginationData.totalCars = Number(totalCars);
          state.paginationData.hasNextPage = Number(page) < Number(totalPages);
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
export const { resetCatalogControls, setPage } = slice.actions;
