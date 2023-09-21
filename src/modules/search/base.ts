import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDatasource, getSearchList } from 'services/search';
import { RootState } from '../store';

const namespace = 'search/base';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  list: [];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  list: [],
};

export const getList = createAsyncThunk(
  `${namespace}/getList`,
  async (params: { pageSize: number; current: number, name?: string }) => {
    const result = await getSearchList(params);

    console.log("getList + result==>"+JSON.stringify(result));


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
        state.list = action.payload?.list;
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getList.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const searchListBase = (state: RootState) => state.listSearchData;

export default listBaseSlice.reducer;
