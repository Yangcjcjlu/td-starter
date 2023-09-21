import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IGoldTableColumn, getGoldTablesColumns, } from 'services/goldtable'
import { updateMapping,postTableDistribution } from 'services/mapping';


const namespace = 'goldTable/columns';

interface IInitialState {
    loading: boolean;
    goldTableColumnList: any[];
}

const initialState: IInitialState = {
    loading: false,
    goldTableColumnList: [],
};

export const getGoldTableColumnList = createAsyncThunk(
    `${namespace}/getList`,
    async (id: number) => {
        const data = await getGoldTablesColumns(id);
        console.log("goldTable==>"+JSON.stringify(data))
        return data;
    },
);

export const updateMappingItem = createAsyncThunk(
    `${namespace}/updateItem`,
    async (data: any) => {
      const result = await updateMapping(data);
      return {
        // list: result?.data,
      //   total: result?.total,
      //   pageSize: params.pageSize,
      //   current: params.current,
      };
    },
  );

export const postTableDistributionItem = createAsyncThunk(
    `${namespace}/postTableDistributionItem`,
    async (data: any) => {
      const result = await postTableDistribution(data);
      return {
        // list: result?.data,
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
        setColumnData: (data:any,rowIndex:any,newRowData:any)=>{
            data.splice(rowIndex, 1, newRowData);
            console.log("setColumnData data==>"+JSON.stringify(data))

        },
        remove: (state,action)=>{
           state.goldTableColumnList = action.payload;
        },
        edit:(state, action) =>{
            state.goldTableColumnList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGoldTableColumnList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getGoldTableColumnList.fulfilled, (state, action) => {
                state.loading = false;
                let goldTableColumnList = action.payload.data;
                console.log("getGoldTableColumnList.fulfilled");
                console.log("goldTableColumnList==>"+JSON.stringify(goldTableColumnList));
                
                const array = [];
                for(let column of goldTableColumnList){
                    if(column['subscrColumn'] == null){
                        column.subscrColumn = column.goldColumn;
                    }
                    array.push(column);
                }

                // subscrColumn
                state.goldTableColumnList = array;
            })
            .addCase(getGoldTableColumnList.rejected, (state) => {
                state.loading = false;
            })
            .addCase(postTableDistributionItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(postTableDistributionItem.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(postTableDistributionItem.rejected, (state) => {
                state.loading = false;
            })
    },
});




export const { clearPageState,setColumnData,remove,edit } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listGoldTableColumn;

export default listBaseSlice.reducer;
