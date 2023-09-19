import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import listDataSource from './datasource/base';
import getDataSource from './datasource/get';
import updateDataSource from './datasource/update';
import sendFile from './eventHub/sendFile';
import global from './global';
import listBase from './list/base';
import listCard from './list/card';
import listSelect from './list/select';
import listMappingBase from './mapping/base';
import listStatisticBase from './statistics/base';
import listAllGoldTable from './goldTable/base';
import user from './user';
import listAllSubscrs from './subscr/base'
import listGoldTableColumn from './goldTable/columns'

const reducer = combineReducers({
  global,
  user,
  getDataSource,
  listDataSource,
  listBase,
  listSelect,
  listCard,
  updateDataSource,
  listMappingBase,
  listStatisticBase,
  sendFile,
  listAllGoldTable,
  listAllSubscrs,
  listGoldTableColumn,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
