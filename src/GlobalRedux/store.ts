import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/getITunesDataSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})