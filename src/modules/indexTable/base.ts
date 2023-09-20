import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDatasource, getDataSourceList } from 'services/datasource';
import { RootState } from '../store';
import {getIndexTableList } from 'services/indexTable'

const namespace = 'indexTable/base';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  datasourceList: IDatasource[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  datasourceList: [],
};

export const getIndexTableBaseList = createAsyncThunk(
  `${namespace}/getList`,
  async (params: { pageSize: number; current: number, name?: string }) => {
    const result = await getIndexTableList(params);
    return {
      list: result?.list,
      total: result?.total,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);




const listBaseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIndexTableBaseList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIndexTableBaseList.fulfilled, (state, action) => {
        state.loading = false;
        state.datasourceList = action.payload?.list;
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getIndexTableBaseList.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listIndexTable;

export default listBaseSlice.reducer;
