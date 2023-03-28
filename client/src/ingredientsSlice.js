import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        entities: [],
    },
    reducers: {
        ingredientAdded(state, action) {
            state.entities.push(action.payload)
        }, 
        ingredientRemoved(state, action) {
            const index = state.entities.findIndex(ingredient => ingredient.product_id === action.payload)
            state.entities.splice(index, 1)
        }
    }, 
    extraReducers: {
        
    }
})

export const {ingredientAdded, ingredientRemoved } = ingredientsSlice.actions;

export default ingredientsSlice.reducer