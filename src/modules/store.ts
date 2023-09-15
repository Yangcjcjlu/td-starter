import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import global from './global';
import user from './user';
import listDataSource from './datasource/base';
import getDataSource from './datasource/get'
import updateDataSource from './datasource/update'
import listBase from './list/base';
import listSelect from './list/select';
import listCard from './list/card';

const reducer = combineReducers({
  global,
  user,
  getDataSource,
  listDataSource,
  listBase,
  listSelect,
  listCard,
  updateDataSource,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
