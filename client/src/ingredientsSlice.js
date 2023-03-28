import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        entities: [],
        menu: '', 
        name: ''
    },
    reducers: {
        ingredientAdded(state, action) {
            state.entities.push(action.payload)
        }, 
        ingredientRemoved(state, action) {
            const index = state.entities.findIndex(ingredient => ingredient.product_id === action.payload)
            state.entities.splice(index, 1)
        },
        assignMenu(state, action) {
            state.menu = action.payload
        }, 
        assignName(state, action) {
            state.name = action.payload
        }
    }, 
    extraReducers: {
        
    }
})

export const {ingredientAdded, ingredientRemoved, assignMenu, assignName } = ingredientsSlice.actions;

export default ingredientsSlice.reducer