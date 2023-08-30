import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme";
import userReducer from "../features/user";
export const store = configureStore({
  reducer: {
    themeReducer,
    userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
