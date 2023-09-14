import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDatasource, getDataSource } from 'services/datasource';
import { RootState } from '../store';

const namespace = 'datasource/get';

interface IDataSourceState {
  loading: boolean;
//   current: number;
//   pageSize: number;
//   total: number;
  item: IDatasource;
}

const initialState: IDataSourceState = {
  loading: true,
//   current: 1,
//   pageSize: 10,
//   total: 0,
   item: null,
};

export const getItem = createAsyncThunk(
  `${namespace}/get/detail?id=1`,
  async (params: { pageSize: number; current: number }) => {
    const result = await getDataSource(params);

    return {
      list: result?.page,
    //   total: result?.total,
    //   pageSize: params.pageSize,
    //   current: params.current,
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
      .addCase(getItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload?.list;
        // state.total = action.payload?.total;
        // state.pageSize = action.payload?.pageSize;
        // state.current = action.payload?.current;
      })
      .addCase(getItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectBase = (state: RootState) => state.getDataSource;

export default listBaseSlice.reducer;
