import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi, substitution } from '../api/api';
import { createQuery } from '../../utilits/utilits';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ signal, ...queryParams } = {}, thunkAPI) => {
    const query = createQuery(queryParams, substitution);
    console.log({ query });
    return appApi
      .get(`/cars${query}`, { signal })
      .then(({ data }) => {
        data.perPage = queryParams?.limit;
        return data;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const fetchBrands = createAsyncThunk(
  'brands/fetchAll',
  async (signal, thunkAPI) =>
    appApi
      .get('/brands', { signal })
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error.message))
);

export const fetchCar = createAsyncThunk(
  'car/fetch',
  async ({ carId, signal }, thunkAPI) =>
    appApi
      .get(`/cars/${carId}`, { signal })
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error.message))
);
