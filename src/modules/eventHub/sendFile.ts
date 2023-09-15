import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { send } from 'services/eventhub';
import { RootState } from '../store';

const namespace = 'eventhub/sendFile';

export const sendFile = createAsyncThunk(
    `${namespace}`,
    async (params: { eventhubName: string, file: [] }) => {
        const result = await send(params);
        console.log('result: ', result)
        return result;
    },
);
interface IInitialState {
    loading: boolean
    code: number
    msg: string
}
const initialState: IInitialState = {
    loading: true,
    code: 1,
    msg: ''
};

const listBaseSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {
        clearPageState: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendFile.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendFile.fulfilled, (state, action) => {
                state.loading = false
                state.code = 0
            })
            .addCase(sendFile.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listBase;

export default listBaseSlice.reducer;
