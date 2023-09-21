import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILineChartResult, getPieChartInfo ,getPip  } from 'services/statistics';
import { getTradPieChartOption,getPieChartOptions } from '../../pages/Statistic/Base/chart';
import { RootState } from '../store';


const namespace = 'statistic/base';

interface IInitialState {
  loading: boolean;
  piploading: boolean;
  list: ILineChartResult[];
  tradPieOptions: any;
  pieOptions:any
}

const initialState: IInitialState = {
  loading: true,
  piploading: true,
  list: [],
  tradPieOptions:[],
  pieOptions:[]
};

const getPieInfo = ():any=> ({
  name: 'Access From',
  type: 'pie',
  radius: '50%',
  // color: ['#ff0000','#00ff00', '#0000ff', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
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

const getSuccessRatePieInfo = ():any =>({
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
    let result = null;
    try{
     result =  await getPieChartInfo(params);
    } catch(error){
      console.log(error);
    }
;    return {
      list: result?.list,
    };
  },
);

export const getSuccessRatioPie = createAsyncThunk(
  `${namespace}/getPip`,
  async () => {
    let result = null;
    try{
     result =  await getPip();
    } catch(error){
      console.log(error);
    };
   return {
      list: result?.list,
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
      }).addCase(getSuccessRatioPie.pending, (state) => {
        state.piploading = true;
      })
      .addCase(getSuccessRatioPie.fulfilled, (state, action) => {
        state.piploading = false;
        let pieOptions = getPieChartOptions();
        let data = action.payload?.list.map((data)=>{
          let obj = {};
          obj.value = data.volume
          obj.name = data.sourceName
          // let = itemStyle: {color:'#91cd77'}
          if(obj.name == 'Succeed'){
            let a = {
              color:'#91cd77'
            }
            obj.itemStyle = a;
          }
          //itemStyle: {color:'#ef6567'}
          if(obj.name =='Failed'){
            let a = {
              color:'#ef6567'
            }
            obj.itemStyle = a;
          }

          return obj;
        })
        console.log("statis.data==>"+JSON.stringify(data));
        pieOptions.series[0].data = data;
        state.pieOptions = pieOptions;
      })
      .addCase(getSuccessRatioPie.rejected, (state) => {
        state.pieOptions = getPieChartOptions()
        state.piploading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const getTradStatisticPieBase = (state: RootState) => state.getStatisticPieBase;

export default listBaseSlice.reducer;
