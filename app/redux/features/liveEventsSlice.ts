'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language:  "en", // default language is English
};

const liveEventSlice = createSlice({
  name: "liveEvents",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "bn" : "en";
      localStorage.setItem("language", state.language); // save to local storage//
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem("language", state.language); // save to local storage//
    },
  },
});

export const { toggleLanguage, setLanguage } = liveEventSlice.actions;

export default liveEventSlice.reducer;
