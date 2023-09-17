import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMappingList } from 'services/mapping';
import { RootState } from '../store';

const namespace = 'datasource/base';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  datasourceList: [];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  datasourceList: [],
};

export const getList = createAsyncThunk(
  `${namespace}/getList`,
  async (params: { pageSize: number; current: number, name?: string }) => {
    const result = await getMappingList(params);
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
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.datasourceList = action.payload?.list;
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const listMapping = (state: RootState) => state.listMappingBase;

export default listBaseSlice.reducer;
