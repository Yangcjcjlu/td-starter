import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ISubscr, getSubscrs } from 'services/subscr'

const namespace = 'subscr/base';

interface IInitialState {
    loading: boolean;
    subscrList: ISubscr[];
}

const initialState: IInitialState = {
    loading: true,
    subscrList: [],
};

export const getSubscrsList = createAsyncThunk(
    `${namespace}/getList`,
    async () => {
        const data = await getSubscrs();
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
            .addCase(getSubscrsList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSubscrsList.fulfilled, (state, action) => {
                state.loading = false;
                state.subscrList = action.payload;
            })
            .addCase(getSubscrsList.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listAllSubscrs;

export default listBaseSlice.reducer;
