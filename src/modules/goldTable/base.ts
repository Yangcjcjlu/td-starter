import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IGoldTable, getAllGoldTable } from 'services/goldtable'

const namespace = 'goldTable/base';

interface IInitialState {
    loading: boolean;
    current: number;
    pageSize: number;
    total: number;
    goldTableList: IGoldTable[];
}

const initialState: IInitialState = {
    loading: true,
    current: 1,
    pageSize: 10,
    total: 0,
    goldTableList: [],
};

export const getAllGoldTableList = createAsyncThunk(
    `${namespace}/getList`,
    async (param?:any) => {
        const data = await getAllGoldTable(param);
        return data;
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
            .addCase(getAllGoldTableList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllGoldTableList.fulfilled, (state, action) => {
                state.loading = false;
                state.goldTableList = action.payload;
            })
            .addCase(getAllGoldTableList.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listAllGoldTable;

export default listBaseSlice.reducer;
