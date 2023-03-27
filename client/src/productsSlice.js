import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
    return fetch('/products')
        .then(response => response.json())
        .then(data => data)
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        entities: []
    },
    reducers: {
        // Blank for now
        // Add, logout? Async?
    }, 
    extraReducers: {
        [fetchProducts.fulfilled] (state, action) {
            state.entities = action.payload
        },
    }
})

export default productsSlice.reducer