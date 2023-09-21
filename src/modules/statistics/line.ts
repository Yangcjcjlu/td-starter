import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILineChartResult, getLineChartInfo } from 'services/statistics';
import { getCustomLineChartOptions } from '../../pages/Statistic/Base/chart';
import { RootState } from '../store';



const namespace = 'statistic/base';

interface IInitialState {
  loading: boolean;
  // current: number;
  // pageSize: number;
  // total: number;
  list: ILineChartResult[];
  tradPieOptions: any;
  customOptions:[]
}

const getLineInfo = ():any =>({
    
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Transaction', 'IndexData', 'IndexInfo'],
      textStyle: {
        color: 'rgba(0, 0, 0, 0.35)'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.35)'
    }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color : 'rgba(0, 0, 0, 0.35)'
    }
    },
    series: [
      {
        name: 'Transaction',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101],
        itemStyle: {
			borderColor: '#dcdcdc'
		}
      },
      {
        name: 'IndexData',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191],
        itemStyle: {
			borderColor: '#dcdcdc'
		}
      },
      {
        name: 'IndexInfo',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201]
      }
    ]

})

const initialState: IInitialState = {
  loading: true,
  // current: 1,
  // pageSize: 10,
  // total: 0,
  list: [],
  tradPieOptions:[],
  customOptions: getLineInfo()
};

// const getPieInfo = ():any=> ({
//   name: 'Access From',
//   type: 'pie',
//   radius: '50%',
//   data: [
   
//   ],
//   emphasis: {
//     itemStyle: {
//       shadowBlur: 10,
//       shadowOffsetX: 0,
//       shadowColor: 'rgba(0, 0, 0, 0.5)'
//     }
//   }
// })




export const getLineData = createAsyncThunk(
  `${namespace}/getLineData`,
  async (params: any) => {
    let result = null;
    try{
        console.log("getLineData==>");
        console.log(JSON.stringify(params));
     result =  await getLineChartInfo(params);
    } catch(error){
      console.log(error);
    }
   return {
      list: result?.list,
      // total: result?.total,
      // pageSize: params.pageSize,
      // current: params.current,
    };
  },
);

    
function formatDate(dateObj:Date){
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth()+1).toString().padStart(2,'0');
    let day = dateObj.getDate().toString().padStart(2,'0');
    return year +'-'+month+'-'+day;
}


const listBaseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
    retrigger:(state,action) =>{
        console.log("retrigger state==>"+JSON.stringify(state));
        console.log("retrigger action==>"+JSON.stringify(action.payload));

        // getLineData()
        // getLineData(params);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLineData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLineData.fulfilled, (state, action) => {
        state.loading = false;
        const customeLineChartInfo = getCustomLineChartOptions();
        const lineInfo = getLineInfo();
        // console.log('action.payload==>'+JSON.stringify(action.payload));
        lineInfo.legend.data= action.payload?.list?.sourceList || [];
        // customeLineChartInfo.series.push(pieInfo);
        lineInfo.xAxis.data =  action.payload?.list?.xDataList || [];


        let serires = [];
        let xDataList = action.payload?.list?.xDataList || [];

        let sortedxDataList = xDataList.map((data:string)=> new Date(data)).sort((a:Date,b:Date)=> a - b)
        .map((date:Date)=> formatDate(date));

        // let dataMap:map =action.payload?.list?.dataMap;

        // let sourceList = action.payload?.list?.sourceList || [];


        // let sourceMap = new Map();
        // for (let k of sourceList){
        //     sourceMap.set(k,[]);
        // }


        // let keys = Object.keys(dataMap);
        

        // for(let a=0; a<sortedxDataList.length; a++ ){
        //     let array = dataMap[sortedxDataList[a]];
        //     if(array && array.length>0){
        //         for(let j of array){
        //             if(j && j.name){
        //                 let list = sourceMap.get(j.name);
        //                 list.push(j.volume);
        //                 sourceMap.set(j.name,list);
        //             }
        //         }
        //     }
        // }

        // console.log("sourceMap==>"+JSON.stringify(sourceMap));



        // for( let i of sourceList ){
        //     let col = {
        //         name: i,
        //        type: 'line',
        //        stack: 'Total',
        //        itemStyle: {
        //         borderColor: '#dcdcdc'
        //     },
        //     data:[]
        //     }
        // }

        // for(let i of xDataList){

        // }

        console.log('lineInfo==>'+JSON.stringify(lineInfo));
        state.customOptions = lineInfo;

        console.log("state.customOptions ==>"+JSON.stringify(state.customOptions ))
        // state.tradPieOptions
        // state.list = action.payload?.list;
        // state.total = action.payload?.total;
        // state.pageSize = action.payload?.pageSize;
        // state.current = action.payload?.current;

        

      })
      .addCase(getLineData.rejected, (state) => {
        state.customOptions = getCustomLineChartOptions()
        state.loading = false;
      });
  },
});

export const { clearPageState, retrigger } = listBaseSlice.actions;

export const getTradLineBase = (state: RootState) => state.getLineBase;

export default listBaseSlice.reducer;
