import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
    incrementBy10: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, incrementBy10 } = counterSlice.actions;

export default counterSlice.reducer;
