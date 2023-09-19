import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'datasource/listSelect';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  datasourceList: any[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  datasourceList: [],
};




export const getMockList = createAsyncThunk(
  `${namespace}/getMockList`,
  async (params:{list:any[] ,pageSize: number; current: number,}) => {
    // console.log("params.list==>"+params.list);
    const result = new Promise((resolve,reject) =>{
        resolve(params.list);
    });
    let data = null;
    await result.then((value)=>{
      // console.log("value==>");
      // console.log(JSON.stringify(value));
       data = value
    });
    // const data = await result;
    // console.log("data1==>"+JSON.stringify(data1));
    return {
      list : data,
      total: 0,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);


const listDataSelectSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMockList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMockList.fulfilled, (state, action) => {
        console.log("action!");
        console.log(action);
        console.log("state");
        console.log(state);
        state.loading = false;
        state.datasourceList = action.payload?.list || [];
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getMockList.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const { clearPageState } = listDataSelectSlice.actions;

export const selectDataSourceListSelect = (state: RootState) => state.ListSelectDataSource;

export default listDataSelectSlice.reducer;
