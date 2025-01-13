import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { CrudSlice } from "./CrudSlice";

export const store = configureStore({
    reducer: {
        authKey: authSlice.reducer,
        crudKey: CrudSlice.reducer
    }
})