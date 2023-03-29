import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ingredientEdited } from "./ingredientsSlice";

export const fetchMenus = createAsyncThunk('menus/fetchMenus', () => {
    // Promise returned
    return fetch('/menus')
        .then(response => response.json())
        .then(data => data)
})      

const menusSlice = createSlice({
    name: 'menus',
    initialState: {
        entities: [],
        status: 'idle'
    },
    reducers: {
        // menuAdded
        // menuUpdated
        // menuRemoved
    },
    extraReducers: {
        // While loading menus
        [fetchMenus.pending](state) {
            state.status = 'loading'
        },
        // After menus received from server
        [fetchMenus.fulfilled](state, action) {
            state.entities = action.payload
            state.status = 'idle'
        },
        [ingredientEdited.fulfilled] (state, action) {
            // Loop over entities, find matching menu item 
            // state.entities.find(menu => {
            //     menu.menu_items.find(menu_item => {
            //         menu_item.ingredients.find(ingredient => {
            //             return ingredient.id === action.payload.id
            //         })
            //     })
            // })
        }
    }
})

export default menusSlice.reducer;