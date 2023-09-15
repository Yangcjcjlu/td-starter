import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDatasource, updateDataSource } from 'services/datasource';
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

export const updateItem = createAsyncThunk(
  `${namespace}/update`,
  async (data: any) => {
    const result = await updateDataSource(null,data);
    return {
      list: result?.data,
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
      .addCase(updateItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload?.list;
        // state.total = action.payload?.total;
        // state.pageSize = action.payload?.pageSize;
        // state.current = action.payload?.current;
      })
      .addCase(updateItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectBase = (state: RootState) => state.updateDataSource;

export default listBaseSlice.reducer;
