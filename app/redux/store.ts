import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice";
import dataReducer from "./features/dataSlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    language: languageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
