import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/Helper";

const initialState = {
  isLoading: false,
  isCreated: false,
  isError: null,
  upload_status: "idle",
  Editlist: [{}],
  products: [],
  totalPage: "",
  list: [{}],
};
export const create = createAsyncThunk("/create", async (formData) => {
  let res = await axiosInstance.post("/product/create", formData);
  let resData = await res?.data;
  return resData;
});
export const productList = createAsyncThunk("/product/list", async (data) => {
  let res = await axiosInstance.post(`/product/list`, data);
  let resData = await res?.data;
  return resData;
});

export const editProductList = createAsyncThunk(
  "/product/detail/",
  async (id) => {
    let res = await axiosInstance.get(`/product/detail/${id}`);
    let resData = await res?.data;
    return resData;
  }
);

export const editProductData = createAsyncThunk(
  "/product/update",
  async (formData) => {
    let res = await axiosInstance.post(
      `/product/update`,
      formData
    );
    let resData = res?.data;
    return resData;
  }
);

export const deleteProduct = createAsyncThunk("/product/remove", async (id) => {
  let res = await axiosInstance.post(`/product/remove`, { id });
  let resData = res?.data;
  return resData;
});

export const CrudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(create.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isCreated = false;
        state.isError = null;
      })
      .addCase(create.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isCreated = false;
      })
      .addCase(create.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.status === 200) {
          state.isCreated = true;
        } else {
          state.isError = payload.message;
        }
      })
      .addCase(productList.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(productList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(productList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload.data;
        state.totalPage = payload.totalPages;
      })
      .addCase(editProductList.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(editProductList.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
        state.Editlist = payload?.data;
      })
      .addCase(editProductList.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })
      .addCase(editProductData.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(editProductData.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
      })
      .addCase(editProductData.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })
      .addCase(deleteProduct.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })     
  },
});
