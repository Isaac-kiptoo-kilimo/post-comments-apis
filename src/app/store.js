import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { postApi } from '../features/post/postApis';
import { commentApi } from '../features/comment/commentApis';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, commentApi.middleware),
});

setupListeners(store.dispatch);
