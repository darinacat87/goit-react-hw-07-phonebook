import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter: (_, action) => action.payload,
  },
});
export const { filter } = filterSlice.actions;