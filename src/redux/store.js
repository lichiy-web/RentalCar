import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/slice';
import { catalogReducer } from './catalog/slice';
import { appReducer } from './app/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filters: filtersReducer,
    app: persistReducer(persistConfig, appReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
