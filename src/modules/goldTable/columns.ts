import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IGoldTableColumn, getGoldTablesColumns } from 'services/goldtable'
import { updateMapping } from 'services/mapping';


const namespace = 'goldTable/columns';

interface IInitialState {
    loading: boolean;
    goldTableColumnList: IGoldTableColumn[];
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
        console.log("updateMapping.data==>");
        console.log(JSON.stringify(data));
      const result = await updateMapping(data);
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
                state.goldTableColumnList = action.payload.data;
            })
            .addCase(getGoldTableColumnList.rejected, (state) => {
                state.loading = false;
            })
    },
});




export const { clearPageState,setColumnData,remove,edit } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listGoldTableColumn;

export default listBaseSlice.reducer;
