import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./actions";

const store = configureStore({
  reducer: {
    data: dataReducer
  }
});

export default store;
