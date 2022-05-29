import { configureStore } from '@reduxjs/toolkit';

import { catsApi } from './api/catsApi';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    favoriteReducer,
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
