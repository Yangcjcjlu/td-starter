import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDataSource } from 'services/datasource';
import { RootState } from '../store';

const namespace = 'datasource/get';

interface IDataSourceState {
  loading: boolean;
//   current: number;
//   pageSize: number;
//   total: number;
  item: any;
}

const initialState: IDataSourceState = {
  loading: true,
//   current: 1,
//   pageSize: 10,
//   total: 0,
   item: null,
};

export const getItem = createAsyncThunk(
  `${namespace}/get/detail`,
  async (params:any) => {
    const result = await getDataSource(params);
    return {
      data: result?.data,
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
        state.item = action.payload?.data;
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

export const getDataItem = (state: RootState) => state.getDataSource;

export default listBaseSlice.reducer;
