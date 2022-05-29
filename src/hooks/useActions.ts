import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { favoriteActions } from '../redux/slices/favoriteSlice';

const allActions = {
  ...favoriteActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
