// import
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  working: false,
  currentDuration: 0,
  checkingWorkhourProgress: false,
};

const workhourSlice = createSlice({
  name: "workhour",
  initialState,
  reducers: {
    setWorking: (state, { payload }) => {
      state.working = payload;
    },
    setCurrentDuration: (state, { payload }) => {
      state.currentDuration = payload;
    },
    setCheckingWorkData: (state, { payload }) => {
      state.checkingWorkData = payload;
    },
    increaseDuration: (state) => {
      state.currentDuration = state.currentDuration + 1;
    },
  },
});

const { reducer, actions } = workhourSlice;

export const { setWorking, setCurrentDuration, increaseDuration } = actions;
export default reducer;
