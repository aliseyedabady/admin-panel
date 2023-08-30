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
    openDrawer: state => {
      state.drawer = true;
    },
    closeDrawer: state => {
      state.drawer = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, openDrawer, closeDrawer } = theme.actions;

export default theme.reducer;
