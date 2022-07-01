import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'isLogged',
    initialState: false,
    reducers: {
      setIsLogged: (state, action) => action.payload
    }
})

export const { setIsLogged } = mySlice.actions;

export default mySlice.reducer;
