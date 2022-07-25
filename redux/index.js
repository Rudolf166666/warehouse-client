import { configureStore } from "@reduxjs/toolkit";

import rootReducers, { apiMiddleware } from "./reducers";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});
