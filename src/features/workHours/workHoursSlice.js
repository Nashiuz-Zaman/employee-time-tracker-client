// import
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  working: false,
  currentDuration: 0,
};

const workHoursSlice = createSlice({
  name: "workHours",
  initialState,
  reducers: {
    setWorking: (state, { payload }) => {
      state.working = payload;
    },
    setCurrentDuration: (state, { payload }) => {
      state.currentDuration = payload;
    },
    increaseDuration: (state) => {
      state.currentDuration = state.currentDuration + 1;
    },
  },
});

const { reducer, actions } = workHoursSlice;

export const { setWorking, setCurrentDuration, increaseDuration } = actions;
export default reducer;
