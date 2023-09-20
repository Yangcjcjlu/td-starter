import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILineChartResult, getPieChartInfo ,getPip  } from 'services/statistics';
import { getTradPieChartOption,getPieChartOptions } from '../../pages/Statistic/Base/chart';
import { RootState } from '../store';


const namespace = 'statistic/base';

interface IInitialState {
  loading: boolean;
  piploading: boolean;
  // current: number;
  // pageSize: number;
  // total: number;
  list: ILineChartResult[];
  tradPieOptions: any;
  pieOptions:any
}

const initialState: IInitialState = {
  loading: true,
  piploading: true,
  // current: 1,
  // pageSize: 10,
  // total: 0,
  list: [],
  tradPieOptions:[],
  pieOptions:[]
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

export const getVolumePie = createAsyncThunk(
  `${namespace}/getPip`,
  async () => {
    console.log("result1");
    let result = null;
    try{
     result =  await getPip();
    } catch(error){
      console.log(error);
    };
   return {
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
      })
      .addCase(getPieData.rejected, (state) => {
        state.tradPieOptions = getPieChartOptions()
        state.loading = false;
      }).addCase(getVolumePie.pending, (state) => {
        state.piploading = true;
      })
      .addCase(getVolumePie.fulfilled, (state, action) => {
        state.piploading = false;
        let pieOptions = getPieChartOptions();
        let data = action.payload?.list.map((data)=>{
          let obj = {};
          obj.value = data.volume
          obj.name = data.sourceName
          return obj;
        })
        // console.log("statis.data==>"+JSON.stringify(data));
        pieOptions.series[0].data = data;
        state.pieOptions = pieOptions;
        console.log("statePipOption==>"+JSON.stringify(state.pieOptions));
        
      })
      .addCase(getVolumePie.rejected, (state) => {
        state.pieOptions = getPieChartOptions()
        state.piploading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const getTradStatisticPieBase = (state: RootState) => state.getStatisticPieBase;

export default listBaseSlice.reducer;
