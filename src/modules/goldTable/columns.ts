import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IGoldTableColumn, getGoldTablesColumns } from 'services/goldtable'

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
        return data;
    },
);
const listBaseSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {
        clearPageState: () => initialState,
        setColumnData: (state,action)=>{
            console.log("state!"+state);
            console.log("action!"+action);
            
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
            });
    },
});




export const { clearPageState,setColumnData } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listGoldTableColumn;

export default listBaseSlice.reducer;
