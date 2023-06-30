import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProduct } from "./productAPI"

const initialState = {
    status: false,
    data: []
}

export const getProductAsycData = createAsyncThunk(
    'get/product',  //
    async (data) => {
        const response = await fetchProduct()
        if(response.status === 200) {
            return response.data
        }
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState,
    // reducers: {
    //     setProductData: (state) => {
    //         state.status = false;
    //         state.data = [];
    //     } 
    // },
    extraReducers: (builder) => {
        builder
        .addCase(getProductAsycData.pending, (state) => {
            state.status = true
        })
        .addCase(getProductAsycData.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = false
        })
    }
});

export const {setProductData} = productSlice.actions

export const getProductData = (state) => state.product.data;
export const getProductStatus = (state) => state.product.status;

export default productSlice.reducer