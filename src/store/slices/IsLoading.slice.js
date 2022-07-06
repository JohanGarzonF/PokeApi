import { createSlice } from '@reduxjs/toolkit';

export const isLoading = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoadingGlobal: (state, action) => action.payload
    }
})

export const { setIsLoadingGlobal } = isLoading.actions;

export default isLoading.reducer;
