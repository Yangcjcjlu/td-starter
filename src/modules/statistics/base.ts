import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILineChartResult, getPieChartInfo } from 'services/statistics';
import { getTradPieChartOption } from '../../pages/Statistic/Base/chart';
import { RootState } from '../store';


const namespace = 'statistic/base';

interface IInitialState {
  loading: boolean;
  // current: number;
  // pageSize: number;
  // total: number;
  list: ILineChartResult[];
  tradPieOptions: any;
}

const initialState: IInitialState = {
  loading: true,
  // current: 1,
  // pageSize: 10,
  // total: 0,
  list: [],
  tradPieOptions:[]
};

const getPieInfo = ():any=> ({
  name: 'Access From',
  type: 'pie',
  radius: '50%',
  data: [
   
  ],
  emphasis: {
    itemStyle: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  }
})


export const getPieData = createAsyncThunk(
  `${namespace}/getPieData`,
  async (params: any) => {
    console.log("result1");
    let result = null;
    try{
     result =  await getPieChartInfo(params);
    } catch(error){
      console.log(error);
    }
;    return {
      list: result?.list,
      // total: result?.total,
      // pageSize: params.pageSize,
      // current: params.current,
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
      .addCase(getPieData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPieData.fulfilled, (state, action) => {
        state.loading = false;
        const tradPieOptions = getTradPieChartOption();
        const pieInfo = getPieInfo();
        pieInfo.data= action.payload?.list || [];
        tradPieOptions.series.push(pieInfo);
        state.tradPieOptions = tradPieOptions;
        // state.tradPieOptions
        // state.list = action.payload?.list;
        // state.total = action.payload?.total;
        // state.pageSize = action.payload?.pageSize;
        // state.current = action.payload?.current;
      })
      .addCase(getPieData.rejected, (state) => {
        state.tradPieOptions = getTradPieChartOption()
        state.loading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const getTradStatisticPieBase = (state: RootState) => state.getStatisticPieBase;

export default listBaseSlice.reducer;
