import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialAuthState = { activeNav: "#home" };

const navSlice = createSlice({
  name: "navbar",
  initialState: initialAuthState,
  reducers: {
    setActiveNav(state, action) {
      state.activeNav = action.payload;
    },
  },
});

export const navActions = navSlice.actions;

const store = configureStore({
  reducer: navSlice.reducer,
});

export default store;
