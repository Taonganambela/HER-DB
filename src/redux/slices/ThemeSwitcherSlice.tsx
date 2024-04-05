import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ThemeState {
  mode: "light" | "dark" | null;
}

const initialState: ThemeState = {
  mode: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setDark: (state) => {
      state.mode = "dark";
    },
    setLight: (state) => {
      state.mode = "light";
    },
  },
});

export const { toggleTheme, setDark, setLight } = themeSlice.actions;
export default themeSlice.reducer;
export const selectThemeMode = (state: RootState) => state.themeSwitcher.mode;
