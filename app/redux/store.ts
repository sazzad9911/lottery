import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice";
import dataReducer from "./features/dataSlice";
import { baseApi } from "./api/baseApi";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    data: dataReducer,
    language: languageReducer,
  },
  middleware:(getdefaultMiddlewares)=>getdefaultMiddlewares().concat(baseApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
