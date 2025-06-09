// import { createSelector } from '@reduxjs/toolkit';
// import { selectNameFilter } from '../filters/selectors';

export const selectCars = state => state.catalog.cars;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
export const selectCar = state => state.catalog.car;
export const selectBrands = state => state.catalog.brands;
export const selectPaginationData = state => state.catalog.paginationData;

// export const selectFilteredCars = createSelector(
//   [selectCars, selectNameFilter],
//   (carList, searchQuery) =>
//     carList.filter(({ name }) =>
//       name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
//     )
// );
