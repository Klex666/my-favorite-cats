import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItemFromLocalStorage } from '../../utils/getItemFromLocalStorage';
import { ICats } from '../api/catsApiTypes';

import { IFavorite } from './type';

const initialState: IFavorite = {
  items: getItemFromLocalStorage(),
  limit: 15,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addCats(state, action: PayloadAction<ICats>) {
      state.items.push(action.payload);
    },
    removeCat(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    moreCats(state) {
      state.limit = state.limit + 10;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
