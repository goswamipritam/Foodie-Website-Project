import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/Helper";
const initialState = {
    isRegister: false,
    isLoggedIn: localStorage.hasOwnProperty("token"),
    profileData: null,
}

export const register = createAsyncThunk(
    "/register",
    async (formData) => {
        let res = await axiosInstance.post("/user/signup", formData);
        let resData = await res?.data;
        return resData;
    }
);
export const login = createAsyncThunk(
    "/signin",
    async (data) => {
        let res = await axiosInstance.post("/user/signin", data);
        let resData = await res?.data;
        return resData;
    }
);

export const profile = createAsyncThunk(
    "/profile",
    async () => {
        let res = await axiosInstance.get("/user/profile-details");
        let resData = await res?.data;
        return resData;
    }
);


export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        handleLogin: (state) => {
            state.isLoggedIn = true;
        },
        handleLogout: (state, { payload }) => {
            localStorage.clear();
            state.isLoggedIn = false;
        }
    },
    extraReducers: (build) => {
        build
            .addCase(profile.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(profile.rejected, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(profile.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.profileData = payload.data;
            })
    }
});
export const { handleLogin, handleLogout } = authSlice.actions;
