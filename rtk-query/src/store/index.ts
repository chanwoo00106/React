import { configureStore } from "@reduxjs/toolkit";
import testApi from "../feature/test/store/test";

const rootReducer = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

export default rootReducer;
