import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IGlobalState } from 'models/Core';

const initialState: IGlobalState = {
  value: 0,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = generalSlice.actions;

export default generalSlice.reducer;
