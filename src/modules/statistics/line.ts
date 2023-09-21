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
  customOptions: []
}

const getLineInfo = (): any => ({

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
      color: 'rgba(0, 0, 0, 0.35)'
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
  tradPieOptions: [],
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
    try {
      console.log("getLineData==>");
      console.log(JSON.stringify(params));
      result = await getLineChartInfo(params);
    } catch (error) {
      console.log(error);
    }
    return result;
  },
);


function formatDate(dateObj: Date) {
  let year = dateObj.getFullYear();
  let month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  let day = dateObj.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
}


const listBaseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
    retrigger: (state, action) => {

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
        const lineInfo = getLineInfo();
        let xDataList = action.payload?.xDataList || [];
        let sourceList = action.payload?.sourceList || [];
        let dataMap = action.payload?.dataMap;
        lineInfo.legend.data = sourceList;
        lineInfo.xAxis.data = xDataList;

        let serires = [];
        let seriresMap = new Map();
        for (let i in sourceList) {
          seriresMap.set(sourceList[i], {
            name: sourceList[i],
            type: 'line',
            stack: 'Total',
            data: [],
            itemStyle: {
              borderColor: '#dcdcdc'
            }
          })
        }

        for (let i in xDataList) {
          let data
          if (data = dataMap[`${xDataList[i]}`]) {
            let map = new Map();
            for (let item of data) {
              map.set(item.sourceName, item)
            }
            for (let name of sourceList) {
              if (map.get(name)) {
                seriresMap.get(name).data.push(map.get(name).volume)
              } else {
                seriresMap.get(name).data.push(0)
              }
            }
          } else {
            // if there has no data this date
            for (let value of seriresMap.values()) {
              value.data.push(0)
            }
          }
        }
        for (let e of seriresMap.values()) {
          serires.push(e)
        }
        lineInfo.series = serires
        state.customOptions = lineInfo;
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
