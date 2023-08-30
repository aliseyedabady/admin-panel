import { createSlice } from "@reduxjs/toolkit";

export interface Theme {
  drawer: boolean;
}

const initialState: Theme = {
  drawer: false,
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: state => {
      state.drawer = !state.drawer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = theme.actions;

export default theme.reducer;
