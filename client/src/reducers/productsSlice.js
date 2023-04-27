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
        // .then(data => data)
})

export const addProduct = createAsyncThunk('products/addProduct', async(product, { rejectWithValue }) => {
    const response = await fetch(`/products`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(product)
    })

    return response.json()
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        entities: [], 
        addingErrors: [],
        editingErrors: []
    },
    reducers: {
        
    }, 
    extraReducers: {
        [fetchProducts.fulfilled] (state, action) {
            state.entities = action.payload
        },
        [editProduct.fulfilled] (state, action) {
            state.editingErrors = []
            if (action.payload.errors) {
                state.editingErrors.push(action.payload)
            } else {
                const product = state.entities.find(prod => prod.id == action.payload.id)

                product.price = action.payload.price
                product.name = action.payload.name
            }

        },
        [addProduct.fulfilled] (state, action) {

            if (action.payload.errors) {
                state.addingErrors = []
                state.addingErrors.push(action.payload)
            } else {
                state.entities.push(action.payload)
            }

        }
    }
})

export default productsSlice.reducer