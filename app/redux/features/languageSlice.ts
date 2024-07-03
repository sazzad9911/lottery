import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: localStorage.getItem("language") || "en", // default language is English
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "en" : "bn";
      localStorage.setItem("language", state.language); // save to local storage
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem("language", state.language); // save to local storage
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
