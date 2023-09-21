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
  list: any[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  list: [],
};

export const getIndexTableBaseList = createAsyncThunk(
  `${namespace}/getList`,
  async (params: { pageSize: number; current: number, name?: string }) => {
    console.log("before getIndexTableBaseList")
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
        console.log("getIndexTableBaseList pending")
        state.loading = true;
      })
      .addCase(getIndexTableBaseList.fulfilled, (state, action) => {
        console.log("getIndexTableBaseList success")
        state.loading = false;
        state.list = action.payload?.list;
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getIndexTableBaseList.rejected, (state) => {
        console.log("getIndexTableBaseList rejected")
        state.loading = false;
      })
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const listIndex = (state: RootState) => state.listIndexTable;

export default listBaseSlice.reducer;
