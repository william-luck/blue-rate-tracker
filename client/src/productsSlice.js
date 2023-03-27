import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
    return fetch('/products')
        .then(response => response.json())
        .then(data => data)
})

export const editProduct = createAsyncThunk('products/editProduct', async(product) => {

    return fetch(`/products/${product.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(product)
    })
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
        [editProduct.fulfilled] (state, action) {
            const product = state.entities.find(product => product.id === action.payload.id)
            product.name = action.payload.name
            product.price = action.payload.price
        }
    }
})

export default productsSlice.reducer